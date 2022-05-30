import React, { useState } from 'react'
import styled from 'styled-components'
import {MdArrowBack, MdAcUnit} from 'react-icons/md'

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

const Option = ({char, option}) => {

  return (
    <li className="options_item">
        <Button
            className='hover'
            onClick={(e) => {

            }}
        >
            <span className='answer'>
                <span className='char'>{char}</span> <span>{option}</span>
            </span>

            <span className="check_icon">

            </span>

        </Button>
    </li>
  )
}

export default Option