import FormData from 'form-data';
import fs from 'fs';
import axios from 'axios';

// Create a minimal PDF buffer for testing
const pdfBuffer = Buffer.from('%PDF-1.4\n1 0 obj\n<</Type /Catalog>>\nendobj\nxref\n0 1\n0000000000 65535 f\ntrailer\n<</Size 1 /Root 1 0 R>>\nstartxref\n0\n%%EOF');

const form = new FormData();
form.append('resume', pdfBuffer, 'test.pdf');
form.append('githubUsername', 'torvalds');
form.append('codeforcesHandle', 'tourist');

axios.post('http://localhost:5000/recruiter', form, {
  headers: form.getHeaders()
})
.then(res => {
  console.log('SUCCESS:', res.data);
})
.catch(err => {
  console.error('ERROR:', err.response?.data || err.message);
});
