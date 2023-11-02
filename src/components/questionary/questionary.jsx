import { questions } from "../../data/data";
import { useState } from "react";
import {
  StyledQuestionary,
  StyledAnswer,
  StyledQuestion,
} from "./questionaryStyles";
const Questionary = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
    }
  };
  return (
    <StyledQuestionary>
      <div>Actual score: {score}</div>
      <StyledQuestion>{currentQuestion.question}</StyledQuestion>
      {currentQuestion.answers.map((answer, index) => (
        <StyledAnswer key={index} onClick={() => handleAnswerClick(answer)}>
          {answer}
        </StyledAnswer>
      ))}
    </StyledQuestionary>
  );
};

export default Questionary;
