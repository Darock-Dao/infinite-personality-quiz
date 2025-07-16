import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors()); // enable CORS for frontend
app.use(express.json()); // parse incoming JSON

// Sample route
app.get('/api/question', (req, res) => {
  res.json({
    id: 1,
    question: "Would you rather fight 1 horse-sized duck or 100 duck-sized horses?",
    options: ["Horse-sized duck", "Duck-sized horses", "Neither", "Both"],
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
