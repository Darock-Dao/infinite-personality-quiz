type QuestionHeaderProps = {
    question: string;
};

function QuestionHeader({question}: QuestionHeaderProps){
    return <h1>{question}</h1>
}

export default QuestionHeader;