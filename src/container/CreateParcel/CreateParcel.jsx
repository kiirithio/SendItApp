import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {BsArrowRight} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

import './CreateParcel.scss'
import { createParcel } from '../../redux/actions/parcelAction'

const CreateParcel = () => {
  const navigate = useNavigate();

  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector(state => state.message);
  const { user: currentUser} = useSelector(state => state.auth);
  const senderId = currentUser.user.id;
  const dispatch = useDispatch();

  const [description, setDescription] = useState('')
  const [sender_number, setSender_number] = useState('')
  const [receiver_number, setReceiver_number] = useState('')
  const [start_location, setStart_location] = useState('')
  const [end_location, setEnd_location] = useState('')
  const [receiver_name, setReceiver_name] = useState('')
  const [weight, setWeight] = useState('')
  
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createParcel(description,sender_number,receiver_number,start_location,end_location,senderId,receiver_name,weight))
    .then(() => {
      setSuccessful(true)
      navigate('/confirmorder')
      })
    .catch((message) => {
      setSuccessful(false)
    })
  }

  return (
    <div className='app__parcel'>
    <h2 className="head-text">Send Parcel in 3 steps!</h2>
        <form className="app__parcel-form app__flex">
         <div>
            <div className='app__steps head-text app__flex'>1</div>
            <label htmlFor="pickuploc" className="input-text">Pickup Location</label>
            <input type="text" name='start_location' value={start_location} className="input-text" onChange={(e) => setStart_location(e.target.value)}/>
            <label name="senderPhone" className="input-text">Sender Phone Number</label>
            <input type="text" className="input-text"  name='sender_number' value={sender_number} placeholder='+254' onChange={(e) => setSender_number(e.target.value)}/>
            <label htmlFor="parceltype" className="input-text">Parcel Type</label>
            <select name="description" onChange={(e) => setDescription(e.target.value)} value={description} type="select"  className="input-text">
              <option value='document' >Document</option> 
              <option value='groceries' >Groceries</option>
              <option value='clothing' >Clothing</option>
              <option value='electronic' >Electronic</option>
              <option value='other' >Other</option>
            </select>
            <label htmlFor="parcelWeight" className="input-text">Parcel Weight ( KGs )</label>
            <select name='weight' value={weight} onChange={(e) => setWeight(e.target.value)} type="select" className="input-text">
              <option value='5' >5</option>
              <option value='10'>10</option> 
              <option value='20'>20</option>
              <option value='40'>40</option>
              <option value='80'>80</option>
              <option value='160'>160</option>
            </select>
          </div>
          <div>
          <div className='app__steps head-text app__flex'>2</div>
            <label htmlFor="deliverloc" className="input-text">Delivery Location</label>
            <input type="text" name='end_location' value={end_location} className="input-text" onChange={(e) => setEnd_location(e.target.value)}/>
            <label htmlFor="receivername" className="input-text">Receiver Name</label>
            <input type="text" name='receiver_name' value={receiver_name} className="input-text" onChange={(e) => setReceiver_name(e.target.value)}/>
            <label htmlFor="receiverphone" className="input-text">Receiver Phone Number</label>
            <input type='text' name='receiver_number' value={receiver_number} className='input-text' placeholder='+254' onChange={(e) => setReceiver_number(e.target.value)}/>
          <Link to='/confirmorder'><button type='button' onClick={handleSubmit}>Next <BsArrowRight /></button></Link>
          </div>
        </form>
    </div>
  )
}

export default CreateParcel