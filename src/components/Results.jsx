import React from 'react'
import winners from '../img/undraw_winners.svg'
import styled from 'styled-components'

const Div = styled.div`
    text-align: center;
    font-family: "Poppins", sans-serif;
    color: #1d355d;
`

const H1 = styled.h1`
    margin-block-start: 72px;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
`

const P = styled.p`
    margin-block-start: 1rem;
    font-weight: 400;
    line-height: 27px;
    font-size: 18px;

    .correct {
        font-size: 36px;
        font-weight: 700;
        color: #60BF88;
    }
`

const Btn = styled.button`
    display: inline-block;
    margin-block-start: 71px;
    border: 2px solid #1d355d;
    padding-block: 18px;
    padding-inline: 61px;
    border-radius: 12px;
    font-weight: 600;
    line-height: 27px;
    font-family: inherit;
    background-color: #fff;
    color: inherit;
    cursor: pointer;
`

const Fig = styled.figure`
    display: flex;
    justify-content: center;
`

const Results = ({correctAns, questions, setQuestions, setScore}) => {
  return (
    <Div className="results">
        <Fig className='results_fig'>
            <img src={winners} alt="" width="238px"/>
        </Fig>
        <H1>Results</H1>
        <P>
            You got <span className="correct">{correctAns}</span> correct answers
        </P>
        <Btn
            onClick={(e) => {
                event.preventDefault();
                setQuestions(questions);
                setScore({correct: 0, incorrect: 0});
            }}
        >
            Try again
        </Btn>
    </Div>
  )
}

export default Results