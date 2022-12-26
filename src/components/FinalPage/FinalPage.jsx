import React from 'react'
import Card from '../Card/Card'

const FinalPage = () => {
  return (
    <Card>
        <h1 className='heading'>End of game, Great Job!</h1>
        <h3 className='primary_text'>Your final score is:</h3>
        <h3 className='final_score'>100</h3>
        <button className='play_again_btn'>Play Again</button>
    </Card>
  )
}

export default FinalPage