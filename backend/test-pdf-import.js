import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const require = createRequire(__filename);

console.log('Testing pdf-parse import...');
try {
  const pdfParse = require('pdf-parse');
  console.log('pdfParse type:', typeof pdfParse);
  console.log('pdfParse keys:', Object.keys(pdfParse).slice(0, 10));
  console.log('pdfParse.default type:', typeof pdfParse.default);
  console.log('First 500 chars of pdfParse:', JSON.stringify(pdfParse).substring(0, 500));
} catch (err) {
  console.error('Error:', err.message);
}
