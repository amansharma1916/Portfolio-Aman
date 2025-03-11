import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import './TechStack.css';

const TechStack = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div className="tech-stack"
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}>
      <div className="tech-item" style={{backgroundColor: 'transparent'}}>
        <div className="tech-icon mongodb"><SiMongodb /></div>
        <span className="tech-letter">M</span>
      </div>
      <div className="tech-item" style={{backgroundColor: 'transparent'}}>
        <div className="tech-icon express"><SiExpress /></div>
        <span className="tech-letter">E</span>
      </div>
      <div className="tech-item" style={{backgroundColor: 'transparent'}}>
        <div className="tech-icon react"><FaReact /></div>
        <span className="tech-letter">R</span>
      </div>
      <div className="tech-item" style={{backgroundColor: 'transparent'}}>
        <div className="tech-icon node"><FaNodeJs /></div>
        <span className="tech-letter">N</span>
      </div>
    </div>
  );
};

export default TechStack; 