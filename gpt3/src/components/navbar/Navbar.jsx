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
      </div>
    </div>
  )
}

export default navbar
