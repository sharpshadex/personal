import React from 'react';
import './App.css';
import Home from './Containters/Home';
import SideMenu from './Containters/SideMenu';
import Experience from './Containters/Experience';
import Works from './Containters/Works';
import Testimonials from './Containters/Testimonials';
import Summary from './Containters/Summary';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className="content-wrapper">
        <Home />
        <Summary />
        <Experience />
        <Works />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
