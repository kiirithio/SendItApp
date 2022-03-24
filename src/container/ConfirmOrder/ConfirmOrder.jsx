import React from 'react'
import { AppWrap } from '../../wrapper'
import { GrLocation, GrPhone, GrUser } from 'react-icons/gr'
import { BsBox, BsCashStack} from 'react-icons/bs'
import { RiScales2Line} from 'react-icons/ri'

import './ConfirmOrder.scss';

const ConfirmOrder = () => {
  return (
      <>
      <h2 className='head-text'>Confirm Order Receipt</h2>
      <div className='app__steps head-text app__flex'>3</div>
      <div className='app__confirm'>
          <h3>Pickup Address</h3>
          <h4><GrLocation /> Address:</h4>
          <p>StartLocation</p>
          <h4><GrUser /> Sender Name:</h4>
          <p>George Waweru</p>
          <h4><GrPhone /> Contact Number:</h4>
          <p>+254 793 018396</p>
          <h3>Delivery Address</h3>
          <h4><GrLocation /> Address:</h4>
          <p>Kenyatta University Teaching, Referral and Research Hospital
              Nairobi City
          </p>
          <h4><GrUser /> Receiver Name:</h4>
          <p>Maxine Kwamboka</p>
          <h4><GrPhone /> Contact Number:</h4>
          <p>+254 701 962300</p>
          <h3>Parcel Details</h3>
          <h4><BsBox /> Parcel Type:</h4>
          <p>Groceries</p>
          <h4><RiScales2Line /> Weight:</h4>
          <p>10 KG</p>
          <h4><BsCashStack /> Total Cost:</h4>
          <p><span>Kshs 1,850.00</span></p>
      </div>
      <button className='app__confirm-button' type='button'>Confirm & Proceed to Payment</button>
      </>
  )
}

export default  AppWrap(ConfirmOrder)