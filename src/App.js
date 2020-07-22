import React from 'react';
import './App.css';
import Home from './Containters/Home';
import SideMenu from './Containters/SideMenu';
import Experience from './Containters/Experience';
import Works from './Containters/Works';
import Testimonials from './Containters/Testimonials';
import Contact from './Containters/Contact';
import Skills from './Containters/Skills';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className="content-wrapper">
        <Home />
        <Skills />
        <Experience />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
