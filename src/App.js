import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.scss';
import { Navbar } from './components';
import { ConfirmOrder, CreateParcel, ForgotPassword, Home, MyOrders, SignIn, SignUp, Dashboard} from './container';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/dashboard/send' element={<CreateParcel />} />
            <Route path='/confirmorder' element={<ConfirmOrder />} />
            <Route path='/my%20orders' element={<MyOrders />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes> 
      </div>
    </BrowserRouter>
  )
}

export default App;
