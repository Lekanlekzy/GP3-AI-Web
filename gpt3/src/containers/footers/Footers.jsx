import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

const Footers = () => {
  return (
    <div className='gpt3__footer' >
      <div className='gpt3__footer-content'>
        <h1 className=' gradient__text'>Do you want to step in to the future before others</h1>
        <button className='gpt3__footer-content-btn'>Request Early Access</button>
      </div>
      <div className='gpt3__footer-down_Section'>
        <div className='gpt3__footer-down_SectionA'>

        </div>
        <div className='gpt3__footer-down_SectionB'>
          <img src={logo} />
        </div>
      </div>
    </div>
  )
}

export default Footers
