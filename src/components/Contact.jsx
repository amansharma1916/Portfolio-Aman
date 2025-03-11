import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission
        window.location.href = `mailto:aman.sharma.19@gmail.com?subject=${formData.subject}&body=Name: ${formData.name}%0D%0A%0D%0AMessage: ${formData.message}`;
    };

    return (
        <div id="contact" className="contact-container">
            <h1 className="contact-title">Get In Touch</h1>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <div className="info-items">
                        <div className="info-item">
                            <FaEnvelope />
                            <div>
                                <h3>Email</h3>
                                <p>amansharmayt19@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaPhone />
                            <div>
                                <h3>Phone</h3>
                                <p>+91 8541029898</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt />
                            <div>
                                <h3>Location</h3>
                                <p>Ranchi, Jharkhand, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/amansharmayt19" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/amansharmayt1908" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/dev.aman.sharma_19?igsh=MWtqeWxsemM0MnE3OQ==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="mailto:amansharmayt19@gmail.com">
                            <MdEmail />
                        </a>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Send Message</h2>
                    <form action='https://api.web3forms.com/submit' method='POST'>
                        <input type='hidden' name='access_key' value='f353f5b9-f073-43d6-a965-74894837ddc0' />
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact; 
