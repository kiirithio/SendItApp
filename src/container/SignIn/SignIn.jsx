import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { AppWrap } from '../../wrapper'
import './SignIn.scss'
import { login } from '../../redux/actions/userAction'

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isLoggedIn } = useSelector(state => state.auth)
  const { message } = useSelector(state => state.message)
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(email, password))
    .then(() => {
      navigate('/dashboard')
    })
    .catch((err) => {
    })
  }
  
  return (
    <div className='app__signin app__flex'>
        <h2 className='head-text'>Sign In</h2>
        <form className='app__signin-form'>
            <label>Email</label>
            <input className='input-text' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>Password</label>
            <input className='input-text' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='button' onClick={handleSubmit}>Sign In</button>
            <p><Link to='/forgotpassword' style={{textDecoration:"none"}}>Forgot Password?</Link></p>
            <div className='app__flex'>
              <p>New here? <Link to='/signup' style={{textDecoration: "none"}}>Create Account</Link></p>
            </div>
        </form>
    </div>
  )
}

export default AppWrap( SignIn )