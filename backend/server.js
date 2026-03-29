import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// import githubRoutes from "./routes/githubRoutes.js";
// import codeforcesRoutes from "./routes/codeforcesRoutes.js";
// import scoreRoutes from "./routes/scoreRoutes.js";
// import aiRoutes from "./routes/aiRoutes.js";
// import recruiterRoutes from "./routes/recruiterRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
// app.use("/github", githubRoutes);
// app.use("/codeforces", codeforcesRoutes);
// app.use("/score", scoreRoutes);
// app.use("/ai", aiRoutes);
// app.use("/recruiter", recruiterRoutes);

app.get("/", (req, res) => {
  res.send("DevProof Backend Running ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});