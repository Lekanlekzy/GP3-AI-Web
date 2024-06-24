import React from 'react'
import './App.css'
import {Article, Brand, Calltoaction, Feature, Navbar} from './components'
import {Blog, Features, Footers, Header, Possibility, WhatGPT3} from './containers'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Possibility />
        <Calltoaction />
        <Blog />
        <Footers/>
      </div>
    </div>
  )
}

export default App
