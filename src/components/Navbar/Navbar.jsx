import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Search, Sun, CircleUserRound, ChevronDown, Quote, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [select, setSelect] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (item) => {
    setSelect(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Apply gradient background when scrolling down
      } else {
        setScrolled(false); // Keep it transparent when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <p className="head-logo">Movie Tube</p>
        <ul className='nav-menu'>
          <li onClick={() => handleClick('Home')} className={select === 'Home' ? 'TabSelected' : ''}><Link className='route-link' to='/'>Home</Link></li>
          <li onClick={() => handleClick('Movies')} className={select === 'Movies' ? 'TabSelected' : ''}><Link className='route-link' to='/movies'>Movies</Link></li>
          <li onClick={() => handleClick('Series')} className={select === 'Series' ? 'TabSelected' : ''}><Link className='route-link' to='/series'>Series</Link></li>
          <li onClick={() => handleClick('Kids')} className={select === 'Kids' ? 'TabSelected' : ''}><Link className='route-link' to='/kids'>Kids</Link></li>
          <li onClick={() => handleClick('Contacts')} className={select === 'Contacts' ? 'TabSelected' : ''}><Link className='route-link' to='/contacts'>Contacts</Link></li>
        </ul>
      </div>
      <div className="navbar-right"> 
        <Search className="icons" />
        <Sun className="icons" />
        <div className="navbar-profile">
          <CircleUserRound className="icons" />
          <ChevronDown className="icons" />
          <div className="dropdown">
            <p>Profile</p>
            <p>Settings</p>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
