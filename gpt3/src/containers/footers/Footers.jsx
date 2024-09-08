import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
import { FaRegCopyright } from "react-icons/fa";


const Footers = () => {
  return (
    <div className='gpt3__footer' >
      <div className='gpt3__footer-content'>
        <h1 className=' gradient__text'>Do you want to step in to the future before others ?</h1>
        <button className='gpt3__footer-content-btn'>Request Early Access</button>
      </div>
      <div className='gpt3__footer-down_Section'>
        <div className='gpt3__footer-down_SectionA'>
        <img src={logo} />
          <p>
          Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className='gpt3__footer-down_SectionB'>
          <p><a>Links</a></p>
          <p><a>Overons</a></p>
          <p><a>Social Media</a></p>
          <p><a>Contact</a></p>
          <p><a>Counters</a></p>
        </div>
        <div className='gpt3__footer-down_SectionB'>
          <p><a>Company</a></p>
          <p><a>Terms & Conditions </a></p>
          <p><a>Privacy Policy</a></p>
          <p><a>Contact</a></p>
        </div>
        <div className='gpt3__footer-down_SectionB'>
          <p><a>Get in Touch</a></p>
          <p><a> Canada</a></p>
          <p><a>8888888</a></p>
          <p><a>info@gpt3.ca</a></p>
        </div>
      </div>
      <div className='gpt3__footer-cpy'>
      <FaRegCopyright color='#fff' /> <a>2021 GPT-3. All rights reserved.</a>
      </div>
    </div>
  )
}

export default Footers
