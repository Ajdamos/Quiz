import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ContextData from './Context'
import { Link, useNavigate } from 'react-router-dom'
import {findResult, results, scoring} from './results'
import './App.css'
export default function EndQuiz() {
    const {scoreQueue, setScoreQueue} = useContext(ContextData)
    const [score, setScore] = useState(10)
    const [show, setShow] = useState(false)
    const [contact, setContact] = useState({Company: '', Name: '', Surname: '', Email: '', Phone: 2002})
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
  const handleChange = e => {
      const { name, value } = e.target;
      setContact(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

    return (
      <div>
      <div className='MainContainer'>
      <h1>Gratuluji dodělal si test, jsem na tebe pyšný</h1>
      {findResult(score)}
      <p onClick={()=> setShow(!show)} className="color">Zobrazit hodnocení</p>
      {scoring(show)}
      </div>

      <form className='container'>
      <label>Vložte svůj mail pro zaslání informací</label>
      <input value={contact.Company} name="Company" onChange={handleChange} placeholder="Jméno firmy"></input>
      <input value={contact.Name} name="Name" onChange={handleChange} placeholder="Křestní jméno"></input>
      <input value={contact.Surname} name="Surname" onChange={handleChange} placeholder="Příjmění"></input>
      <input value={contact.Email} name="Email" onChange={handleChange} placeholder="Email"></input>
      <input value={contact.Phone} name="Phone" onChange={handleChange} placeholder="Telefoní číslo"></input>
      <p className='button' onClick={() => console.log(contact)}>Zaslat informace</p>
      </form>
      </div>
    ) 
    }