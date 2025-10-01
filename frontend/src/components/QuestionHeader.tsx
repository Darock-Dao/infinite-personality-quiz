import styles from "./QuestionHeader.module.css"

type QuestionHeaderProps = {
  question: string;
  className?: string;
};

function QuestionHeader({ question, className }: QuestionHeaderProps) {
  return <h1 className = {`${styles.questionHeader} ${className || ""}`}>
    {question}
  </h1>;
}

export default QuestionHeader;
