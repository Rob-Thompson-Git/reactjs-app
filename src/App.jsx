import { useState } from 'react';
import './App.css';
import FinalPage from './components/FinalPage/FinalPage';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import StartPage from './components/StartPage/StartPage'

function App() {
  const [showStartPage, setShowStartPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const [username, setUsername] = useState('');

  return (
  <div className='container'>
    {showStartPage && (
    <StartPage
      setShowStartPage={setShowStartPage}
      setShowQuestionsPage={setShowQuestionsPage}
      topScore={topScore}
      username={username}
      setUsername={setUsername}
     />)}
    {showQuestionsPage && (
      <QuestionsPage 
      score={score}
      setScore={setScore}
      setShowQuestionsPage={setShowQuestionsPage}
      setShowFinalPage={setShowFinalPage}
      />)}
    {showFinalPage && (
      <FinalPage 
        score={score}
        setScore={setScore}
        topScore={topScore}
        setTopScore={setTopScore}
        setShowStartPage={setShowStartPage}
        setShowFinalPage={setShowFinalPage}
        username={username}
        setUsername={setUsername}
      />)}
  </div>
  );
}

export default App;
