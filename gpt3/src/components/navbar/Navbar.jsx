import React, {useState}  from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { RiMenu3Line ,RiCloseLine }  from "react-icons/ri";

const Menu = ()=> (
  <>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatisgpt'>What is GPT?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3-navbar'>
      <div className='gpt3-navbar-links'>
        <div className='gpt3-navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3-navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt-navbar__sign'>
        <p>Sign in</p>
        <button type='button'> Sign Up</button>
        <div className='gpt-navbar-menu'>
          {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} />
          
          :<RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} /> 
          }
          {toggleMenu && (
            <div className='gpt-navbar-menu_container scale-up-center'>
              <div className='gpt-navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )

          }
        </div>
      </div>
    </div>

  )
}

export default Navbar
