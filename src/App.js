import React from 'react';
import './App.css';
import Intro from './Containters/Intro';
import SideMenu from './Containters/SideMenu';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Intro />
    </div>
  );
}

export default App;
