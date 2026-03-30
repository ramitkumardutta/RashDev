import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/test-upload", upload.single("resume"), (req, res) => {
  console.log("DEBUG - req.body:", req.body);
  console.log("DEBUG - req.file:", req.file ? { fieldname: req.file.fieldname, size: req.file.size } : null);
  
  res.json({
    body: req.body,
    file: req.file ? { fieldname: req.file.fieldname, size: req.file.size } : null
  });
});

export default router;
