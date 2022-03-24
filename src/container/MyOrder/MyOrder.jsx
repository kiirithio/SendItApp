import React from 'react'
import {HiX, HiPhone} from 'react-icons/hi'
import images from '../../constants/images'

import './MyOrder.scss'

const MyOrder = (props) => {
  return (
    <div className='app__myorder'>
        <div className="app__myorder-popup">
            <span onClick={props.handleClose}><HiX /></span>
            <div>
                <h3>Parcel #37yh2390</h3>
                <h4>IN TRANSIT</h4>
                <p className='input-text'>Groceries, 15.00 KG</p>
                <div className='courier-details'>
                    <div>
                        <h5>Dan Nduthi</h5>
                        <p>KMCQ 2037P</p>
                    </div>
                    <img src={images.nduthiguy} style={{width:"50px"}} alt='courier avatar'/>
                </div>
                <button type='button'><HiPhone /> Call Courier</button>
            </div>
            <div>
                <img src={images.map1} alt='map tracking parcel'/>
            </div>
        </div>
    </div>
  )
}

export default MyOrder