import React from 'react'
import { Routes, Route } from "react-router-dom";

//Importing pages
import Home from './pages/Home';
import Movies from './pages/Movies'
import Series from './pages/Series'
import Kids from './pages/Kids'
import Contacts from './pages/Contacts'


const App = () => {
  return (
    <Routes>
      <div>App</div>
      <Route path="/" element={<Home/>} />
      <Route path="/Movies" element={<Movies/>} />
      <Route path="/Series" element={<Series/>} />
      <Route path="/Kids" element={<Kids/>} />
      <Route path="/Contacts" element={<Contacts/>} />
    </Routes>
  )
}

export default App