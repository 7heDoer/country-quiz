import React from 'react'
import undraw from '../img/undraw.svg'
import styled from 'styled-components'
import Question from './Question'

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

const Card = ({question}) => {
  return (
    <div className="card_component">
        <header className="header">
            <h1>COUNTRY QUIZ</h1>
            <figure className='absolute'>
                <img src={undraw} alt="" width="122px"/>
            </figure>
        </header>
        <Div>
            <Question questionObj={question} />
        </Div>
    </div>
  )
}

export default Card