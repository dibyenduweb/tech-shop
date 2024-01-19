/* eslint-disable no-unused-vars */
//import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Container from '../Container/Container';
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import useTheme from '../../Hooks/useTheme';


//import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const {theme , toggleTheme } = useTheme()
  
    const {user, logOut,} = useAuth();
  console.log(user);
    const handleLogOut = () =>{
        logOut()
        .then(() => console.log('your logged out now'))
        .catch(error => console.log(error))

    }

  const navLinks = <>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/addproduct">Add Product</NavLink></li>
  <li><NavLink to="/displayproduct">ShopPage</NavLink></li>
  <li><NavLink to="/cart">MyCart</NavLink></li>
  
  {user &&
    <>

    </>
  }
    </>
    return (
      
      <div className="navbar shadow-xl dark:text-white">
      <div className="navbar-start  ">
          <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
                  {navLinks}
              </ul>
          </div>
          <a className=" font-bold normal-case lg:text-3xl">Tech-Shop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              {navLinks}
          </ul>
      </div>
      <div className='navbar-end'>
        {
            user ?
             <>
            <img className="w-14 rounded-full avatar" src={user?.photoURL} alt=''/>
           
            <span className='lg:mr-2'>{user?.displayName}</span>
            {/* <span>{user.email}</span> */}

            
            <a onClick={handleLogOut} className='btn btn-sm'>Sign out</a>

            </> 
            :
            <Link to='/login'>
                <button className='btn mr-10 btn-sm'>Login</button>
            </Link>
        }
        
        
       
      </div>
      <div>
       
        <button onClick={toggleTheme}>{ theme==='dark' ? <FiSun /> : <IoMoonOutline /> }</button>
         
        </div>
  </div>
);
};

export default Header;