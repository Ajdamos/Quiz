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
        <p>Lorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsim
        Lorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsimLorem ipsim
        </p>
        <Link to="quiz"><p className='Button' onClick={() => setScoreQueue([])}>Udělat Test</p></Link>
        <ul>
          <li> Lorem ipsum dotor</li>
          <li> Lorem ipsum dotor</li>
          <li> Lorem ipsum dotor</li>
        </ul>
    </div>
  )
}
