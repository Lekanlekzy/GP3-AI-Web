import React from 'react'
import './features.css'

const Features = ({title, text}) => {
  return (
    <div className='gpt3-features' id='features'>
      <div className='gpt3-features-container__title'>
        <div className='gradient__text'/>
        <h1>{title}</h1>
      </div>
      <div className='gpt3-features-container__text'>
        {text}
      </div>
    </div>
  )
}

export default Features
