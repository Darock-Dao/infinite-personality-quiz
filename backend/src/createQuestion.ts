import Markov from "markov-strings";
import questions from "./questions.json";

interface GeneratedQuestion {
  question: string;
  options: string[];
}

function generateQuestion(): GeneratedQuestion {
  const markov = new Markov({ stateSize: 2 });
  const questionStrings = questions.map(q => q.question);
  markov.addData(questionStrings);

  const result = markov.generate({
    maxTries: 100,
    filter: (res) => {
      const words = res.string.split(" ");
      return words.length >= 3 && words.length <= 20;
    },
  });

  let question = result.string.trim();
  if (!question.endsWith("?")) {
    question += "?";
  }

  const allOptions = questions.flatMap(q => q.options);
  const shuffled = allOptions.sort(() => Math.random() - 0.5);
  const options = shuffled.slice(0, 4);

  return {
    question,
    options,
  };
}

export default generateQuestion;
