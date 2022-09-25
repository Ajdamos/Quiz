import React, { useEffect, useState } from 'react'
import './App.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {Percent} from './Helper'
import EndQuiz from './EndQuiz'
import ContextData from './Context'
import list from './list'
const Question = () => {
    const {stage, setStage} = useContext(ContextData)
    const {scoreQueue, setScoreQueue} = useContext(ContextData)
    const [current, setCurrent] = useState("none")
    const navigate = useNavigate()
    function handleAnswer(points) {
      if (stage === list.length-1){
        setStage(0)
        setScoreQueue(scoreQueue => [...scoreQueue, points])
        navigate('/endquiz')
      }
      else if (current < 3 && current > -3){
        setStage(stage + 1);
        setScoreQueue(scoreQueue => [...scoreQueue, points])
        setCurrent("none")
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
    function ButtonBack () {
      if (stage){
        return "Back"
      }
      else return "vratit"
    }
    function ButtonEnd () {
      if (stage === list.length -1){
        return "ukoncit te"
      }
      else return "Dalsi otazka"
    }

    function classHandler(number){
      if (number === current)return "button chosen"
      else return "button notChosen"
    }
  return (
    
    <div className='MainContainer'>
        <h1>{list[stage]}</h1>
        <div className='container'>            
        <div className={classHandler(2)} onClick={() => setCurrent(2)}>Jsem s tím velmi spokojen</div>
        <div className={classHandler(1)} onClick={() => setCurrent(1)}>Spíše souhlasím</div>
        <div className={classHandler(0)} onClick={() => setCurrent(0)}>Je mi to nějak jedno</div>
        <div className={classHandler(-1)} onClick={() => setCurrent(-1)}>Spíše nesouhlasím</div>
        <div className={classHandler(-2)} onClick={() => setCurrent(-2)}>Absolutně s tím nesouhlasím</div>
        </div>
        <div className='container'>
        <div className='button Main' onClick={() => handleBack()}>{ButtonBack()}</div>
        <div className='button Main' onClick={() => handleAnswer(current)}>{ButtonEnd()}</div>
        </div>
        <p>{Percent(stage, list.length)}</p>
    </div> 
    )
}
export default Question