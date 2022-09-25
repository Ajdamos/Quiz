import React from 'react'
import "./App.css"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ContextData from './Context'
export default function StartQuiz() {
  const {setScoreQueue} = useContext(ContextData)
  return (
    <div className='MainContainer'>
        <h1>StartQuiz</h1>
        <Link to="quiz"><div className='button chosen' onClick={() => setScoreQueue([])}>zacni quiz</div></Link>
    </div>
  )
}
