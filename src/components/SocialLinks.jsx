import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/amansharmayt19" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
      {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a> */}
      <a href="https://www.instagram.com/dev.aman.sharma_19?igsh=MWtqeWxsemM0MnE3OQ==" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="mailto:amansharmayt19@gmail.com">
        <MdEmail />
      </a>
      <a href="https://github.com/amansharma1916" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialLinks; 
