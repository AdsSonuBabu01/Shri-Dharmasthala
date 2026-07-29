const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const imageDir = path.join(__dirname, 'src/assets/images');

const files = fs.readdirSync(imageDir).filter(f => !f.startsWith('.'));

const sleep = ms => new Promise(r => setTimeout(r, ms));

function getFileHash(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(data).digest('hex');
}

async function analyzeWithRetry(filename) {
  const filePath = path.join(imageDir, filename);
  const ext = path.extname(filename).toLowerCase();
  const mimeType = ext === '.webp' ? 'image/webp' : 'image/jpeg';

  const fileData = fs.readFileSync(filePath);
  const base64Data = fileData.toString('base64');

  let attempts = 0;
  while (attempts < 5) {
    try {
      const res = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{
          role: 'user',
          parts: [
            { inlineData: { data: base64Data, mimeType } },
            {
              text: `You are an expert QA inspector analyzing hotel/lodge room photos.
Analyze this photo carefully and answer:
1. Exact visual content: What is in the photo?
2. Count of visible beds: Exactly how many cots/beds are visible in the room? (0, 1, 2, 3, 4, 5, 6+ beds)
3. Is it a bedroom or something else? (e.g. Bathroom, Reception/Lobby, Elevator/Lift, Dining Hall, Temple, Parking, Bedding close-up).
4. Categorize as EXACTLY ONE of:
- "Double Room" (1 double bed or 2 single beds)
- "Triple Room" (3 single beds or 1 double + 1 single)
- "4 Bed Room" (exactly 4 beds / 2 double beds)
- "5 Bed Room" (exactly 5 beds)
- "Family Bedroom (6+ Guests)" (dormitory / hall / 6+ beds)
- "Bathroom"
- "Reception / Facilities"
- "Temple / Exterior"
`
            }
          ]
        }]
      });
      return res.text;
    } catch (err) {
      if (err.status === 429 || (err.message && err.message.includes('Quota exceeded'))) {
        console.log(`[Quota 429] Waiting 20 seconds before retrying ${filename}... (Attempt ${attempts + 1})`);
        await sleep(20000);
        attempts++;
      } else {
        throw err;
      }
    }
  }
  throw new Error(`Failed to analyze ${filename} after 5 attempts due to quota.`);
}

async function main() {
  const hashMap = {};
  for (const f of files) {
    const hash = getFileHash(path.join(imageDir, f));
    if (!hashMap[hash]) hashMap[hash] = [];
    hashMap[hash].push(f);
  }

  const uniqueHashes = Object.keys(hashMap);
  console.log(`Found ${files.length} files across ${uniqueHashes.length} unique hashes.`);

  const report = {};

  for (let i = 0; i < uniqueHashes.length; i++) {
    const hash = uniqueHashes[i];
    const group = hashMap[hash];
    const repFile = group[0];
    console.log(`\n[${i + 1}/${uniqueHashes.length}] Analyzing unique image ${repFile} (representing ${group.join(', ')})...`);

    try {
      const result = await analyzeWithRetry(repFile);
      for (const f of group) {
        report[f] = {
          representative: repFile,
          duplicates: group,
          sha256: hash,
          analysis: result
        };
      }
      console.log(`>>> RESULT FOR ${repFile}:\n${result}\n`);
    } catch (e) {
      console.error(`ERROR analyzing ${repFile}:`, e.message);
      for (const f of group) {
        report[f] = { error: e.message };
      }
    }

    if (i < uniqueHashes.length - 1) {
      console.log('Sleeping 13s to respect rate limits...');
      await sleep(13000);
    }
  }

  fs.writeFileSync('image_verification_report.json', JSON.stringify(report, null, 2));
  console.log('\nFinished all analysis! Saved to image_verification_report.json');
}

main();
