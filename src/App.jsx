import { useState } from 'react'
import {questions as Q} from './util/clean_api.js';
import Card from './components/Card.jsx';
// import logo from './logo.svg'

function App() {
  const [qCount, setQCount] = useState({correct: 0, incorrect: 0})
  const [question, setQuestion] = useState(Q[Math.floor(Math.random() * Q.length)]);
  const [questions, setQuestions] = useState(Q.filter(q => q != question));
  console.log(question)
  console.log(questions)

  return (
    <div className="App">
      <Card question={question} />
    </div>
  )
}

export default App
