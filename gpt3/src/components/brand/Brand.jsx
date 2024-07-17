import React from 'react'
import brand from './brand.css'

import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import Atlassian from '../../assets/atlassian.png'
import Dropbox from '../../assets/dropbox.png'
import Shopify from '../../assets/shopify.png'
const Brand = () => {
  return (
    <div>
      <img src={google} alt='google'/>
      <img src={slack} alt='google'/>
      <img src={Atlassian} alt='google'/>
      <img src={Dropbox} alt='google'/>
      <img src={Shopify} alt='google'/>
    </div>
  )
}

export default Brand
