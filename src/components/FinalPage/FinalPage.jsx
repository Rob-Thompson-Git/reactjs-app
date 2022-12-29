import React from 'react'
import Card from '../Card/Card'
import './FinalPage.css'

const FinalPage = ({
  score,
  setShowFinalPage,
  setShowStartPage,
  topScore,
  setTopScore,
  setScore,
  username,
  setUsername,
}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score)
    }
    setShowFinalPage(false);
    setShowStartPage(true);
    setScore(0);
    setUsername('');
  }
  return (
    <Card>
        <h1 className='heading'>End of game, Great Job, {username}!</h1>
        <h3 className='primary_text'>Your final score is:</h3>
        <h3 className='final_score'>{score}</h3>
        <button className='play_again_btn' onClick={handleClick}>Play Again</button>
    </Card>
  )
}

export default FinalPage;