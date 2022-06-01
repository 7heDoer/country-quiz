import { useState } from 'react'
import {questions as Q} from './util/clean_api.js';
import Card from './components/Card.jsx';
// import logo from './logo.svg'

function App() {
  const [questions, setQuestions] = useState(Q);
  const [question, setQuestion] = useState(questions[Math.floor(Math.random() * questions.length)]);


  return (
    <div className="App">
      <div className="app-container">
        <Card 
          question={question}
          questions_init={Q}
          setQuestion={setQuestion}
          questions={questions}
          setQuestions={setQuestions}
        />
      </div>
      <footer className="footer">
        created by <a href="https://devchallenges.io/portfolio/7heDoer">@7heDoer</a> - devChallenges.io
      </footer>
    </div>
  )
}

export default App
