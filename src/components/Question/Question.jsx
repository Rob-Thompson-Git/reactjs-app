import React from 'react'
import "./Question.css"
import Card from '../Card/Card'

const Question = ({
    questionIndex,
    setQuestionIndex,
    questions,
    setShowQuestionsPage,
    setShowFinalPage,
    score,
    setScore,
}) => {
    const handleClick = (isCorrect) => {
        if (questionIndex < 3) {
            if (isCorrect) {
                setScore((score) => (score += 100))
            }
            setQuestionIndex((prevIndex) => prevIndex + 1)
        } else {
            if (isCorrect) {
                setScore((score) => (score += 100));
            }
            setShowQuestionsPage(false);
            setShowFinalPage(true);
        }
    };
  return (
    <Card>
        <h1 className='question'>{questions[questionIndex].questionText}</h1>
        <div className='answers'>
            {questions[questionIndex].answers.map((answer, index) => (
                <div 
                    className='answer' 
                    key={index}
                    onClick={() => handleClick(answer.correct)}
                    >
                    <p>{answer.answerText}</p>
                </div>
            ) )}
        </div>

        <p className='score'>
            Score: <span>{score}</span>
        </p>

        <p className='question-number'>
            Question: <span>{questionIndex + 1}</span>/10
        </p>
    </Card>
  );
};

export default Question;