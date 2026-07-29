const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const imageDir = path.join(__dirname, 'src/assets/images');

const uniqueFiles = [
  'regenerated_image_1784793715698.jpg', // Used in Room 1
  'regenerated_image_1784793717182.jpg', // Used in Room 2
  'regenerated_image_1784919464007.jpg', // Used in Room 3
  'regenerated_image_1784919465518.webp', // Used in Room 4
  'regenerated_image_1784919467151.jpg', // Used in Room 5
  'regenerated_image_1784919471667.webp', // Used in Gallery
  'regenerated_image_1784802020183.jpg', // Used in Gallery
  'regenerated_image_1784802021532.jpg', // Used in Gallery
  'regenerated_image_1784793718742.jpg', // Extra in images
  'regenerated_image_1784800527971.jpg', // Extra in images
  'regenerated_image_1784800530041.jpg', // Extra in images
  'regenerated_image_1784801332999.webp', // Extra in images
  'regenerated_image_1784802192579.jpg'  // Extra in images
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function analyze(file) {
  const filePath = path.join(imageDir, file);
  const ext = path.extname(file).toLowerCase();
  const mimeType = ext === '.webp' ? 'image/webp' : 'image/jpeg';
  const fileData = fs.readFileSync(filePath);
  const base64Data = fileData.toString('base64');

  try {
    const res = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{
        role: 'user',
        parts: [
          { inlineData: { data: base64Data, mimeType } },
          { text: 'Analyze this image in detail. 1. What room or facility is shown? 2. Count EXACT number of visible beds (0, 1, 2, 3, 4, 5, 6+). 3. Any non-bedroom features (reception, lift, dining, temple, parking, bathroom)? 4. Categorize as ONE of: [Double Room, Triple Room, 4 Bed Room, 5 Bed Room, Family Bedroom (6+ Guests), Deluxe Single/Double, Bathroom, Non-Room Facility].' }
        ]
      }]
    });
    console.log(`\n========================================\n[${file}]\n${res.text}`);
  } catch (err) {
    console.error(`Error on ${file}:`, err.message || err);
  }
}

async function run() {
  for (let i = 0; i < uniqueFiles.length; i++) {
    console.log(`\nAnalyzing (${i+1}/${uniqueFiles.length}) ${uniqueFiles[i]}...`);
    await analyze(uniqueFiles[i]);
    if (i < uniqueFiles.length - 1) {
      await sleep(13500);
    }
  }
}

run();
