import { useState } from 'react'
import {questions as Q} from './util/clean_api.js';
import Card from './components/Card.jsx';
// import logo from './logo.svg'

function App() {
  const [questions, setQuestions] = useState(Q);
  const [question, setQuestion] = useState(questions[Math.floor(Math.random() * questions.length)]);

  return (
    <div className="App">
      <Card 
        question={question}
        setQuestion={setQuestion}
        questions={questions}
        setQuestions={setQuestions}
       />
    </div>
  )
}

export default App
