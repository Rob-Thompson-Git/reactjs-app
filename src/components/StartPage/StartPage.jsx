import React from 'react'
import Card from '../Card/Card'
import './StartPage.css'

const StartPage = ({
  setShowStartPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
}) => {
  const startGame = () => {
    if (username.trim().length > 0) {
      setShowStartPage(false)
      setShowQuestionsPage(true)
    }
  }

  return (
    <Card>
        <h1 className='header'>React Quiz</h1>
        <h3 className='primary_text'>Please Enter your Username</h3>
        <input 
          className='username_input' 
          type='text' 
          placeholder='Enter Username' 
          value={username} 
          onChange={e => setUsername(e.target.value)}
        />
        <button className='start_btn' onClick={startGame}>Play</button>
        <p className='top_score'>
          Top Score: <span>{topScore}</span>
          </p>
    </Card>
  )
}

export default StartPage