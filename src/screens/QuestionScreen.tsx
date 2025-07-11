import QuestionAnswer from "../components/QuestionAnswer";
import QuestionHeader from "../components/QuestionHeader";

function QuestionScreen() {
  var Question = "Sample Question";
  var options = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
  return (
    <div>
      <QuestionHeader question = {Question}/>
      {options.map((option, i) => (
        <QuestionAnswer key={i} answer={option} />
      ))}
    </div>
  );
}

export default QuestionScreen;
