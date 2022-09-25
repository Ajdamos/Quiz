import './App.css'
import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContextData from './Context'
import Question from './Question';
import StartQuiz from './StartQuiz';
import EndQuiz from './EndQuiz';
function App() {
  const [stage, setStage] = useState(0)
  const [scoreQueue, setScoreQueue] = useState([])
  return (
    <ContextData.Provider value={{stage, setStage, scoreQueue, setScoreQueue}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartQuiz/>}/>
      <Route path="/quiz" element={<Question/>}/>
      <Route path="/endquiz" element={<EndQuiz/>}/>
    </Routes>
    </BrowserRouter>
    </ContextData.Provider>
  );
}

export default App;
