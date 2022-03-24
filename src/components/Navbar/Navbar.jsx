import React, {useState} from 'react'
import { HiMenuAlt4, HiX,HiOutlineChevronDown } from 'react-icons/hi';
import { motion } from 'framer-motion'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import './Navbar.scss'
import { logout } from '../../redux/actions/userAction';
import images from '../../constants/images';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { user: currentUser} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate= useNavigate()
    
    const logOut = () => {
        dispatch(logout());
        navigate('/')
      };

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <Link to='/' style={{textDecoration: "none", color: 'black'}}><h2>SendIt</h2></Link>
        </div>
        <ul className='app__navbar-links'>
            {['home', 'about', 'careers', 'contact']
            .map((item) =>(
                <NavLink to={item} style={{textDecoration: "none"}} activeClassName="active">
                    <li className="app__flex p-text " key={item}>
                        <div />
                        <p>{item}</p>
                    </li>
                </NavLink>
            ))}
        </ul>

        {currentUser ? (
            <div className="app__navbar-buttons">
                <div className="dropdown">
                    <p>{currentUser.user.fullname} <HiOutlineChevronDown /></p>
                    <div className="dropdown-content">
                        <p>Profile</p>
                        <p onClick={logOut}>Logout</p>
                    </div>
                </div>
                <img src={images.avatar} alt='avatar'/>
            </div>
        ) : (
            <div className="app__navbar-buttons">
                <button type='button'><Link to='/signin' style={{textDecoration: "none", color:"black"}}>Sign In</Link></button>
                <Link to='/signup' style={{textDecoration: "none"}}><button type='button'>Create Account</button> </Link>
            </div>
        )}

        <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)}/>

                {toggle && (
                    <motion.div
                        whileInView={{x: [300, 0]}}
                        transition={{ duration :0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {['home', 'my orders', 'customer care','refer & earn', 'signin', 'signup'].map((item) =>(
                                
                                <NavLink to={item} style={{textDecoration: "none"}} activeClassName="active">
                                    <li className="app__flex p-text " key={item}>
                                        <p onClick={() => setToggle(false)}>{item}</p>
                                    </li>
                                </NavLink>
                            ))}
                        </ul>
                    </motion.div>
                )}
        </div>
    </nav>
  )
}

export default Navbar