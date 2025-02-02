// Importing Dependencies
import React from 'react'
import { Routes, Route } from "react-router-dom";

// Importing pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Kids from './pages/Kids';
import Contacts from './pages/Contacts';


// Importing Components
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App;
