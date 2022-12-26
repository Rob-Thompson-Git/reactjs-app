import React from 'react'
import Card from '../Card/Card'
import './StartPage.css'

const StartPage = () => {
  return (
    <Card>
        <h1 className='header'>React Quiz</h1>
        <h3 className='primary_text'>Please Enter your Username</h3>
        <input className='username_input' type='text' placeholder='Enter Username'/>
        <button className='start_btn'>Play</button>
        <p className='top_score'>
          Top Score: <span>0</span>
          </p>
    </Card>
  )
}

export default StartPage