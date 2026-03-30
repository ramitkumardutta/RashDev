import axios from "axios";

export const convertPdfToText = async (fileUrl) => {
  try {
    const response = await axios.post(
      "https://api.pdf.co/v1/pdf/convert/to/text",
      {
        url: fileUrl
      },
      {
        headers: {
          "x-api-key": process.env.PDFCO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.body;

  } catch (err) {
    throw new Error("PDF conversion failed: " + err.message);
  }
};