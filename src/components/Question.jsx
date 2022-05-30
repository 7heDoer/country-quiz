import React, { useState } from 'react'
import Option from './Option'
import styled from 'styled-components'

const Button = styled.button`
`;

const Question = ({questionObj}) => {
    const [answered, setAnswered] = useState(false);
    const next = <Button>Next</Button>
    const char_options = ['A', 'B', 'C', 'D'];

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
                        />
                    )
                })
            }
        </ul>
        <div className="next">
            {
                (answered) ? next: null
            }
        </div>
    </div>
  )
}

export default Question