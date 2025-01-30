import React from 'react'
import './Navbar.css'
import {Search, Sun, CircleUserRound, ChevronDown } from 'lucide-react'

import { useState } from 'react';


const Navbar = () => {

  const [select, setSelect] = useState('Home');

  const handleClick = (item) => {
    setSelect(item);
  };


  return (
    <div className='navbar'>
      <div className="navbar-left">
        <p className='head-logo'>Movie Tube</p>
        <ul>
          <li onClick={() => handleClick('Home')} className={select === 'Home' ? 'TabSelected' : ''}>Home</li> 
          <li onClick={() => handleClick('Movies')} className={select === 'Movies' ? 'TabSelected' : ''}>Movies</li> 
          <li onClick={() => handleClick('Series')} className={select === 'Series' ? 'TabSelected' : ''}>Series</li> 
          <li onClick={() => handleClick('Kids')} className={select === 'Kids' ? 'TabSelected' : ''}>Kids</li> 
          <li onClick={() => handleClick('Contacts')} className={select === 'Contacts' ? 'TabSelected' : ''}>Contacts</li>
        </ul>
      </div>
      <div className="navbar-right">
        <Search className='icons' />
        <Sun className='icons' />
        <div className="navbar-profile">
          <CircleUserRound className='icons' />
          <ChevronDown className='icons' />
          <div className="dropdown">
            <p>Profile</p>
            <p>Settings</p>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}
<Search  />
export default Navbar