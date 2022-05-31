import React, { useState } from 'react'
import Option from './Option'
import styled from 'styled-components'
import { shuffle } from '../util/clean_api';

const Button = styled.button`
    padding-inline: 37px 36px;
    padding-block: 15px 14px;
    border-color: #f9a826;
    background-color: #f9a826;
    margin-block-start: 24px;
    color: #fff;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
    border: none;
    cursor: pointer;
    margin-inline-start: auto;
`;

const Question = ({questionObj, setScore, score, questions, setQuestions, setQuestion}) => {
    const [showCorrect, setShowCorrect] = useState('');
    const [showNext, setShowNext] = useState(false);
    const [qCorrect, setQCorrect] = useState(null);


    // questionObj.options = shuffle(questionObj.options);

    const char_options = ['A', 'B', 'C', 'D'];

    const handleNextClick = (e) => {
        let questions_arr = questions.filter(question => question != questionObj)
        setQuestions(questions_arr);
        let new_questionObj = questions_arr[Math.floor(Math.random() * questions_arr.length)];
        setQuestion(new_questionObj)

        let option_btns = Array.from(document.getElementsByClassName('option_btn'))

        option_btns.map(btn => {
            btn.classList.add('hover');
            btn.disabled = false;
        })

        let correct_class = document.querySelector('.correct');
        let incorrect_class = document.querySelector('.incorrect');
        if (correct_class) correct_class.classList.remove('correct');
        if (incorrect_class) incorrect_class.classList.remove('incorrect');
  

        setShowNext(false);
        setQCorrect(null);

    }
    
    const next = <Button onClick={handleNextClick}>Next</Button>
    
    let question;

    switch(questionObj.category) {
        case "flag":
            question = `Which country does this flag belong to?`
        break;
        case "capital":
            question = `${questionObj.query} is the capital of `
        break;
        case "continent":
            question = `${questionObj.query} is from which continent`
        break;
        default:
            question = null;
        break;
    }

  return (
    <div className="question">
        <figure>
            {
                (questionObj.category == "flag") ? <img src={questionObj.query} width="84px" height="54px" alt='' className='flag'/>: null
            }
        </figure>
        <p className="question_text">
            {question}
        </p>

        <ul className="options">
            {
                questionObj.options.map((option, index) => {
                    return (
                        <Option
                            key={option}
                            char={char_options[index]}
                            option={option}
                            answer={questionObj.answer}
                            showCorrect={showCorrect}
                            setShowCorrect={setShowCorrect}
                            setShowNext={setShowNext}
                            setScore={setScore}
                            score={score}
                            qCorrect={qCorrect}
                            setQCorrect={setQCorrect}
                        />
                    )
                })
            }
        </ul>
        <div className="next">
            {
                (showNext) ? next: null
            }
        </div>
    </div>
  )
}

export default Question