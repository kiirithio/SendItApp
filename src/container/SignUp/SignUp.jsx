import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { AppWrap } from '../../wrapper'
import './SignUp.scss'
import { register } from '../../redux/actions/userAction'

const SignUp = () => {
  const navigate = useNavigate();

  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    fullname: "",
    phone: "",
    email: "",
    password: ""
  })

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(register(user))
    .then(() => {
      setSuccessful(true)
      navigate('/signin')
      })
    .catch((message) => {
      setSuccessful(false)
    })
  }

  const onchangeMethod = e => {
    setUser(prev=>({
      ...prev, 
      [e.target.name]:e.target.value
    }))
  }

  return (
    <div className='app__signup app__flex'>
        <h2 className='head-text'>Create Account</h2>
        <div className='app__signup-form'>
            <label>Select Account Type:</label>
            <select name="accounts" className='input-text'>
                <option value="standard">Standard</option>
                <option value="courier">Courier</option>
                <option value="admin">Admin</option>
            </select>
            <label>Username</label>
            <input type='text' className='input-text' name="username" value={user.username} onChange={onchangeMethod}/>
            <label>Full Names</label>
            <input type='text' className='input-text'  name="fullname" value={user.fullname} onChange={onchangeMethod}/>
            <label>Phone Number</label> 
            <input type='text' className='input-text' name="phone" value={user.phone} onChange={onchangeMethod}/>
            <label>Email</label>
            <input type='email' className='input-text' name="email" value={user.email} onChange={onchangeMethod}/>
            <label>Password</label>
            <input type='password' className='input-text' name="password" value={user.password} onChange={onchangeMethod}/>
            <button type='button' onClick={handleSubmit}>Create Account</button>
            <div className='app__flex'>
              <p>Already have an account? <Link to='/signin' style={{textDecoration: "none"}}>Sign In</Link></p>
            </div>
        </div>
    </div>
  )
}

export default AppWrap(SignUp)