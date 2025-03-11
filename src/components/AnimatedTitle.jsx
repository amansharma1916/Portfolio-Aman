import React, { useState, useEffect } from 'react';
import './AnimatedTitle.css';

const titles = [
  "Aman Sharma",
  "Web Developer",
  "Software Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Developer",
];

const AnimatedTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsAnimating(true);
      }, 500); // Wait for fade out before changing text
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="name-container">
      <h1 className={`main-title ${isAnimating ? 'fade-in' : 'fade-out'}`}>
        {titles[currentIndex]}
      </h1>
    </div>
  );
};

export default AnimatedTitle; 