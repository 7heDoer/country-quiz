import React, { useState } from 'react'
import undraw from '../img/undraw.svg'
import styled from 'styled-components'
import Question from './Question'
import Results from './Results'

const Div = styled.div`
    background-color: #fff;
    padding-block: 1rem;
    border-radius: 24px;
    padding-inline: .3rem;
    // margin-inline: .4rem;


    @media (min-width: 360px) {
        padding-block: 1.5rem;
        padding-inline: .8rem;
        margin-inline: 0;
    }

    @media (min-width: 500px) {
        padding-block: 2.2rem 2.2rem;
        padding-inline: 32px;
    }
`

const Card = ({question, questions, setQuestion, setQuestions}) => {
    const [score, setScore] = useState({correct: 0, incorrect: 0});
    let total = score.correct + score.incorrect;
  return (
    <div className="card_component">
        <header className="header">
            <h1>COUNTRY QUIZ</h1>
            <figure className='absolute'>
                {(total == 10) ? null : <img src={undraw} alt="" width="122px"/>}
            </figure>
        </header>
        <Div>
            {
                (total == 10) ? <Results /> :
                <Question 
                    questionObj={question}
                    setQuestion={setQuestion} 
                    setScore={setScore}
                    score={score}
                    questions={questions}
                    setQuestions={setQuestions}
                />
            }
        </Div>
    </div>
  )
}

export default Card