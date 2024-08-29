import React from 'react'
import { Article } from '../../components'
import 
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_GroupA'>
        <Article/>
      </div>
      <div className='gpt3__blog-container_GroupB'>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      </div>
    </div>
      
    </div>
  )
}

export default Blog
