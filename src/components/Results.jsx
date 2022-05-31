import React from 'react'
import winners from '../img/undraw_winners.svg'
import styled from 'styled-components'

const H1 = styled.h1`

`

const Results = ({correctAns}) => {
  return (
    <div className="results">
        <figure className='results_fig'>
            <img src={winners} alt="" width="122px"/>
        </figure>
        <H1>Results</H1>
    </div>
  )
}

export default Results