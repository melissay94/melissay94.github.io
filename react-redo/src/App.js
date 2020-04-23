import React, { useState } from 'react';
import './App.css';
import useScrollPosition from './hooks/useScrollPosition';
import StickyHeader from './components/StickyHeader';
import Landing from './sections/Landing';
import About from './sections/About';
import Project from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [showOnScroll, setShowOnScroll] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y < -1000;

    if (isShow !== showOnScroll) setShowOnScroll(isShow);
  }, 
    [showOnScroll],
    false,
    false,
    300
  );

  return (
    <div className="App">
      <StickyHeader show={showOnScroll} />
      <Landing />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
