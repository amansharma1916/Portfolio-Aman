import React, { useState, useEffect } from 'react';
import AnimatedTitle from './AnimatedTitle';
import TechStack from './TechStack';
import './MainContent.css';

const MainContent = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  let timeoutId = null;
  let projectsTimeoutId = null;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleMouseMove = () => {
      if (!isMobile) {
        setIsMoving(true);
        setShowProjects(true);
        clearTimeout(timeoutId);
        clearTimeout(projectsTimeoutId);
        
        timeoutId = setTimeout(() => {
          setIsMoving(false);
        }, 1000);

        projectsTimeoutId = setTimeout(() => {
          setShowProjects(false);
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
      clearTimeout(projectsTimeoutId);
    };
  }, [isMobile]);

  return (
    <div className="left-section">
      <AnimatedTitle />
      <div className="tech-container">
        <TechStack />
      </div>
      <div className="title-container">
        <h2 className="stack-title">Stac Developer</h2>
        <div className="buttons-container">
          <button 
            className={`about-button ${isMoving || isMobile ? 'visible' : ''}`}
            onMouseEnter={() => !isMobile && setIsMoving(false)}
            onClick={() => scrollToSection('projects')}
          >
            Projects <span className="arrow">→</span>
          </button>
          <button 
            className={`about-button projects ${showProjects || isMobile ? 'visible' : ''}`}
            onMouseEnter={() => !isMobile && setShowProjects(false)}
            onClick={() => scrollToSection('contact')}
          >
            Contact Me <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;