import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'

const navbar = () => {
  return (
    <div className='gpt3-navbar'>
      <div className='gpt3-navbar-links'>
        <div className='gpt3-navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3-navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatisgpt'>What is GPT?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a ref='#blog'>Library</a></p>
        </div>
      </div>
    </div>
   
  )
}

export default navbar
