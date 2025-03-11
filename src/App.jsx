import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import SocialLinks from './components/SocialLinks';
import AboutMe from './components/AboutSkills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <div className="logo-top-left">AS</div>
      <div className="content">
        <MainContent />
        <div className="right-section">
          <SocialLinks />
        </div>
      </div>
      <div className="geometric-shape"></div>
      <div className="AboutMe">
        <AboutMe />
      </div>
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
