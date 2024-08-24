import React from 'react'
import article from './article.css'
const Article = () => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt='blog-image' />
      </div>
      Article
    </div>
  )
}

export default Article
