import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Search, Sun, CircleUserRound, ChevronDown, Quote } from 'lucide-react';

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
        <ul>
          <li onClick={() => handleClick('Home')} className={select === 'Home' ? 'TabSelected' : ''}>Home</li>
          <li onClick={() => handleClick('Movies')} className={select === 'Movies' ? 'TabSelected' : ''}>Movies</li>
          <li onClick={() => handleClick('Series')} className={select === 'Series' ? 'TabSelected' : ''}>Series</li>
          <li onClick={() => handleClick('Kids')} className={select === 'Kids' ? 'TabSelected' : ''}>Kids</li>
          <li onClick={() => handleClick('Contacts')} className={select === 'Contacts' ? 'TabSelected' : ''}>Contacts</li>
        </ul>
      </div>
      <div className="navbar-right"> 
        <div className="dropdown-search">
          <input  value='' type="text" placeholder="Search here.." />
        </div>
        {/* <Search className="icons" /> */}
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
