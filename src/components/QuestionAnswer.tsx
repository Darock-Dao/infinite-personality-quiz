type QuestionAnswerProps = {
  answer: string;
};

function QuestionAnswer({ answer }: QuestionAnswerProps) {
  return <h2>{answer}</h2>;
}

export default QuestionAnswer;
