import { questions } from "../../data/data";
import { useState, useEffect } from "react";
import {
  StyledQuestionary,
  StyledAnswer,
  StyledQuestion,
} from "./questionaryStyles";

const Questionary = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setIsAnswerCorrect(true);
      setScore(score + 1);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  useEffect(() => {
    if (isAnswerCorrect !== null) {
      const delay = setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
        }
        setIsAnswerCorrect(null);
      }, 1000);

      return () => clearTimeout(delay);
    }
  }, [isAnswerCorrect, currentQuestionIndex]);

  return (
    <StyledQuestionary>
      <div>Puntaje actual: {score}</div>
      <StyledQuestion>{currentQuestion.question}</StyledQuestion>
      {currentQuestion.answers.map((answer, index) => (
        <StyledAnswer
          key={index}
          onClick={() => handleAnswerClick(answer)}
          style={{
            backgroundColor:
              isAnswerCorrect === true &&
              answer === currentQuestion.correctAnswer
                ? "green"
                : isAnswerCorrect === false &&
                  answer === currentQuestion.correctAnswer
                ? "red"
                : "white",
          }}
        >
          {answer}
        </StyledAnswer>
      ))}
    </StyledQuestionary>
  );
};

export default Questionary;
