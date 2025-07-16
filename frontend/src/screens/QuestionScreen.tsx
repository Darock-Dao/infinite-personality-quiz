import { useState, useEffect } from "react";
import QuestionAnswer from "../components/QuestionAnswer";
import QuestionHeader from "../components/QuestionHeader";
import MovingBackground from "../components/MovingBackground";

function QuestionScreen() {
  var Question = "Sample Question";
  var options = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];

  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    console.log("useEffect ran");
  }, []);

  return (
    <div>
      <MovingBackground></MovingBackground>
      <QuestionHeader question={Question} />
      {options.map((option, i) => (
        <QuestionAnswer
          key={i}
          answer={option}
          isSelected={selected === option}
          onClick={() => setSelected(option)}
        />
      ))}
    </div>
  );
}

export default QuestionScreen;
