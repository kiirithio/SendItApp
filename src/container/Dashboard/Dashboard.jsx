import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import './Dashboard.scss'
import { logout } from '../../redux/actions/userAction';
import { AppWrap } from '../../wrapper'
import {CreateParcel, MyOrders} from '../../container'

const Dashboard = () => {
    const { user : currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
      };
    const [isOpen, setIsOpen] = useState('');
  return (
      <div className='app__dashboard'>  
        <div className='app__dashboard-sidebar'>
            <ul>
                {['send','orders', 'track', 'delivered', 'refer & earn', 'customer care']
                .map((item) =>(
                    <li className="app__flex p-text " key={item}>
                        <div />
                        <p onClick={(e) => setIsOpen(item)}>{item}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className='app__dashboard-card'>
            {isOpen && 'send'?<CreateParcel />: <MyOrders /> }
        </div>
      </div>
  )
}

export default AppWrap(Dashboard)