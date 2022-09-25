import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ContextData from './Context'
import { Link, useNavigate } from 'react-router-dom'
export default function EndQuiz() {
    const {scoreQueue, setScoreQueue} = useContext(ContextData)
    const [score, setScore] = useState(10)
    const [email, setEmail] = useState()
    const navigate = useNavigate()
    useEffect(() => {
      if(scoreQueue.length){
        setScore(scoreQueue.reduce((current,total) => {
        return total + current;
    }))
        setScoreQueue([])
    }
    // else{navigate('/')}
    else (console.log(score))
    },[])

    return (
      <div className='MainContainer'>
      <h1>Gratuluji dodělal si test, jsem na tebe pyšný</h1>
      <p>{score}</p>
      <label>Vložte svůj mail pro zaslání informací</label>
      <input value={email} onChange={(e => setEmail(e.target.value))}></input>
      </div>
    ) 
    }