import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getUserParcel } from '../../redux/actions/parcelAction';

import { AppWrap } from '../../wrapper'
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.scss';

const MyOrders = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { user: currentUser} = useSelector(state => state.auth);

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  const dispatch = useDispatch()
  dispatch(getUserParcel(currentUser.user.id))

  return (
    <div className='app__orders'>
      <h2 className='head-text'>Order History</h2>
      <div className="app__orders-card" onClick={togglePopup}>
        <h4>IN TRANSIT</h4>
        <h3>Parcel : <span>#37yh2390</span></h3>
        <h3>Time : <span>10:36 AM</span></h3>
        <h3>Date : <span>3/15/2022</span></h3>
        <h3>From <span>Nyeri </span>To <span>Nairobi</span></h3>
      </div>
      <div className="app__orders-card">
        <h4>DELIVERED</h4>
        <h3>Parcel : <span>#39CX3005</span></h3>
        <h3>Time : <span>1:02 PM</span></h3>
        <h3>Date : <span>3/13/2022</span></h3>
        <h3>From <span>Nyeri </span>To <span>Maralal</span></h3>
      </div>
      {isOpen && <MyOrder handleClose={togglePopup} />}
    </div>
  )
}

export default AppWrap(MyOrders)