import { useState, useEffect } from "react";
import QuestionAnswer from "../components/QuestionAnswer";
import QuestionHeader from "../components/QuestionHeader";
import MovingBackground from "../components/MovingBackground";
import styles from "./QuestionScreen.module.css"
import BackgroundMusic from "../components/BackgroundMusic";

interface QuestionData {
  id: number;
  question: string;
  options: string[];
}

function QuestionScreen() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [data, setData] = useState<QuestionData | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (questionNumber < 6) {
      //fetch from json
      fetch("http://localhost:3002/api/question")
        .then((res) => res.json())
        .then(setData)
        .catch(console.error);
    } else {
      //generate wackier question
      fetch("http://localhost:3002/api/markov-question")
        .then((res) => res.json())
        .then(setData)
        .catch(console.error);
    }
  }, [questionNumber]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className = {styles.container}>
      <MovingBackground />
      <QuestionHeader question={data.question} className = {styles.questionHeader}/>
      <div className = {styles.answersGrid}>
        {data.options.map((option, i) => (
          <QuestionAnswer
            key={i}
            answer={option}
            isSelected={selected === option}
            onClick={() => {
              setSelected(option);
              setSelected(null);
              setQuestionNumber((prev) => prev + 1);
            }}
          />
        
      ))}
      </div>
    </div>
  );
}

export default QuestionScreen;
