import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Menu from './sections/Menu';
import './styles/App.scss';

function App() {
  return(
    <div className='App'>
      <Navbar/>
      <Home />
      <About />
      <Menu />
    </div>
  )
}

export default App;
