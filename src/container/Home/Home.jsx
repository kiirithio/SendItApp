import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='app__home app__flex'>
      <div className="app__home-image">
        <img src={images.bikelogo} alt='bikelogo'/>
      </div>
      <div className='app__home-text'>
        <h1>Your ⚡ lightning-fast courier service app</h1>
        <h3>SendIt is a courier service that helps users deliver parcels 
            to different destinations providing
            courier quotes based on weight categories.
        </h3>
        <Link to='/createparcel'><button>Get Started <BsArrowRight /></button></Link>
      </div>
    </div>
  )
}

export default AppWrap(Home)