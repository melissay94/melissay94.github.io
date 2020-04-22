import React from 'react';
import './App.css';
import Landing from './sections/Landing';
import About from './sections/About';
import Project from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
