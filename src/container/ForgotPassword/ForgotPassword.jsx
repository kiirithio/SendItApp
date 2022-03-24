import React from 'react'
import { AppWrap } from '../../wrapper'

import './ForgotPassword.scss'

const ForgotPassword = () => {
  return (
    <div className='app__forgot app__flex'>
        <h2 className='head-text'>Reset Password</h2>
        <div className='app__forgot-form'>
            <label className=''>Email</label>
            <input className='input-text' type='email' ></input>
            <label> New Password</label>
            <input className='input-text' type='password' ></input>
            <label> Confirm Password</label>
            <input className='input-text' type='password' ></input>
            <button type='button'>Reset</button>
        </div>
    </div>
  )
}

export default AppWrap(ForgotPassword)