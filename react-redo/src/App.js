import React from 'react';
import './App.css';
import Landing from './sections/Landing';
import About from './sections/About';
import Project from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
