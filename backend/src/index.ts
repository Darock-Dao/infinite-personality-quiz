import express from "express";
import cors from "cors";
import questions from "./questions.json";

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

app.get("/api/question", (req, res) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];
  res.json(question);
  console.log(question)
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});