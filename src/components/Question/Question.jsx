import React from 'react'
import "./Question.css"
import Card from '../Card/Card'
import { questions } from '../../questions'

const Question = ({
    questionIndex,
    setQuestionIndex,
    questions,
    setShowQuestionsPage,
    setShowFinalPage,
    score,
    setScore,
}) => {
    const handleClick = (isCorrect) => {}
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
  )
}

export default Question