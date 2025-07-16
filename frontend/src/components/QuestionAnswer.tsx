type QuestionAnswerProps = {
  answer: string;
  isSelected: boolean;
  onClick: () => void;
};

function QuestionAnswer({ answer, isSelected, onClick }: QuestionAnswerProps) {
  return (
    <button
      onClick={onClick}
      className={`btn m-2 ${
        isSelected ? "btn-primary" : "btn-outline-secondary"
      }`}
    >
      {answer}
    </button>
  );
}

export default QuestionAnswer;
