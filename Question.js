import React, { useEffect, useState } from 'react'
import './App.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ContextData from './Context'
import list from './list'
const Question = () => {
    const {stage, setStage} = useContext(ContextData)
    const {scoreQueue, setScoreQueue} = useContext(ContextData)
    const [negate, setNegate] = useState(1);
    const navigate = useNavigate()
    function handleAnswer(points) {
      if (stage === list.length-1){
        setStage(0)
        setScoreQueue(scoreQueue => [...scoreQueue, points * negate])
        navigate('/endquiz')
      }
      else if (points < 6 && points > -6){
        if(stage > 9) {
          setNegate(-1)
        }
        setStage(stage + 1);
        setScoreQueue(scoreQueue => [...scoreQueue, points * negate])
        console.log(points * negate)
        

      }
    
      else return null
    }
    function handleBack(){
      if (stage === 0) {
        navigate('/')
      }
      else{
        Back()
      }
    }
    function Back(){
      setStage(stage - 1)
      const temp = scoreQueue;
      temp.splice(temp.length - 1, 1)
      console.log(temp)
      setScoreQueue(temp)
    }
  return (
    
    <div className='MainContainer'>
      <p className='percent'>{stage + 1} / {list.length}</p>
      <h2 className='ask'>{list[stage]}</h2>    
        <div className='container'>   
        <div className="button" onClick={() => handleAnswer(5)}>Jsem s tím velmi spokojen</div>
        <div className="button" onClick={() => handleAnswer(3)}>Spíše souhlasím</div>
        <div className="button" onClick={() => handleAnswer(-1)}>Je mi to nějak jedno</div>
        <div className="button" onClick={() => handleAnswer(-3)}>Spíše nesouhlasím</div>
        <div className="button" onClick={() => handleAnswer(-5)}>Absolutně s tím nesouhlasím</div>
        </div>
        <p className='pointer' onClick={() => handleBack()}>🠔</p>

    </div> 
    )
}
export default Question