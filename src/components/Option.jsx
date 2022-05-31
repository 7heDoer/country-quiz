import React, { useState } from 'react'
import styled from 'styled-components'
import {MdCheckCircleOutline, MdHighlightOff} from 'react-icons/md'

const Button = styled.button`
    display: flex;
    max-inline-size: 100%;
    inline-size: 100%;
    padding-inline: 19px;
    padding-block: 10px;
    align-items: center;
    border: 2px solid rgba(96, 102, 208, 0.7) ;
    color: #6066D0;
    border-radius: 12px;
    font-size: .8rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 36px;
    cursor: pointer;

    &.hover:hover {
        background-color: #F9A826;
        color: #fff;
        border: 2px solid #F9A826;
    }

    .answer {
        display: flex;
        gap: 10px;
        align-items: center;

        .char {
            font-size: 1.1rem;
        }
    }

    .check_icon {
        width: 30px;
        height: 30px;
        margin-inline-start: auto;
    }

    &.correct {
        background-color: #60bf88;
        border-color: #60bf88;
        color: #fff;
    }
    &.incorrect {
        background-color: #ea8282;
        border-color: #ea8282;
        color: #fff;
    }

    @media (min-width: 500px) {
        font-size: 18px;

        .answer {
            display: flex;
            gap: 46px;
            align-items: center;
    
            .char {
                font-size: 24px;
            }
        }
    }
`

const Option = ({char, option, answer, showCorrect, setShowCorrect, setShowNext, setScore, score, qCorrect, setQCorrect}) => {
    const [correct, setCorrect] = useState(null);


    const handleButtonClick = (e) => {
        const target = e.target.closest('Button');
        if (target.disabled) return;
        let options = Array.from(document.getElementsByClassName('hover'));
        const option = target.innerText.split("\n")
        const option_text = option[option.length - 1];

        let currentScore = score;

        if (option_text == answer) {
            setCorrect(true);
            setQCorrect(true)
            currentScore.correct++;
            setScore(score)
            target.classList.add('correct');
        }else {
            setCorrect(false)
            setQCorrect(false)
            currentScore.incorrect++;
            setScore(score)
            target.classList.add('incorrect');
            options.map(option => {
                let opt_text = option.innerText.split("\n");
                if (opt_text[opt_text.length - 1] == answer) {
                    option.classList.add('correct')
                    setShowCorrect(opt_text[opt_text.length - 1])
                }
            })
        }

        options.map(option => option.classList.remove('hover'));
        options.map(option => option.disabled = true);

        setShowNext(true);
    }

  return (
    <li className="options_item">
        <Button
            className='hover option_btn'
            onClick={handleButtonClick}
        >
            <span className='answer'>
                <span className='char'>{char}</span> <span>{option}</span>
            </span>

            <span className="check_icon">
                {
                    (correct== true && qCorrect == true) || (showCorrect == option) ? <MdCheckCircleOutline className='option_icon'/> : (correct === false) ? <MdHighlightOff className='option_icon'/> : null
                }
            </span>

        </Button>
    </li>
  )
}

export default Option