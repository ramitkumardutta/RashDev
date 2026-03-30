import { errorHandler } from "./middleware/errorHandler.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Route modules commented out because route files are not present in this workspace
import githubRoutes from "./routes/githubRoutes.js";
import codeforcesRoutes from "./routes/codeforcesRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import recruiterRoutes from "./routes/recruiterRoutes.js";
import debugRoutes from "./routes/debugRoutes.js";



const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/github", githubRoutes);
app.use("/codeforces", codeforcesRoutes);
app.use("/score", scoreRoutes);
app.use("/ai", aiRoutes);
app.use("/debug", debugRoutes);
app.use("/recruiter", recruiterRoutes);

app.get("/", (req, res) => {
  res.send("DevProof Backend Running ");
});

// Error handler (must be registered after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});