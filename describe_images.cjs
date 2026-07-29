const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const imageDir = path.join(__dirname, 'src/assets/images');

const uniqueFiles = [
  'regenerated_image_1784793715698.jpg',
  'regenerated_image_1784793717182.jpg',
  'regenerated_image_1784793718742.jpg',
  'regenerated_image_1784793899905.jpg',
  'regenerated_image_1784800527971.jpg',
  'regenerated_image_1784800530041.jpg',
  'regenerated_image_1784801332999.webp',
  'regenerated_image_1784802020183.jpg',
  'regenerated_image_1784802021532.jpg',
  'regenerated_image_1784802192579.jpg',
  'regenerated_image_1784918531093.jpg',
  'regenerated_image_1784918532548.webp',
  'regenerated_image_1784919467151.jpg',
  'regenerated_image_1784918534603.webp'
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function analyzeImage(filename) {
  const filePath = path.join(imageDir, filename);
  const ext = path.extname(filename).toLowerCase();
  let mimeType = 'image/jpeg';
  if (ext === '.webp') mimeType = 'image/webp';

  const fileData = fs.readFileSync(filePath);
  const base64Data = fileData.toString('base64');

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType
              }
            },
            {
              text: `Detailed visual assessment of this photo:
1. Exact scene/subject: What room or facility is this?
2. Exact count of visible beds: How many distinct beds are visible? (0, 1, 2, 3, 4, 5, 6+ beds)
3. Non-room features present? (e.g. reception desk, elevator, temple tower, dining hall tables, parking lot, bathroom, bed close-up)
4. Final classification tag: Choose ONE from [Double Room, Triple Room, 4 Bed Room, 5 Bed Room, Family Bedroom (6+ Guests), Deluxe Single/Double, Bathroom, Interior/Bedding, Non-Room Facility].`
            }
          ]
        }
      ]
    });

    console.log(`\n=== FILE: ${filename} ===`);
    console.log(response.text);
  } catch (err) {
    console.error(`Error analyzing ${filename}:`, err.message || err);
  }
}

async function run() {
  for (let i = 0; i < uniqueFiles.length; i++) {
    console.log(`[${i+1}/${uniqueFiles.length}] Analyzing ${uniqueFiles[i]}...`);
    await analyzeImage(uniqueFiles[i]);
    if (i < uniqueFiles.length - 1) {
      console.log('Waiting 13s to respect API rate limits...');
      await sleep(13000);
    }
  }
}

run();
