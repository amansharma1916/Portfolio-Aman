import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaCode, FaLaptopCode, FaAtom, FaPython, FaSchool } from 'react-icons/fa';
import './Education.css';

const Education = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const educationData = [
        {
            type: "college",
            degree: "Bachelor of Technology (B.Tech)",
            major: "Computer Science Engineering (CSE)",
            institution: "Amity University Jharkhand",
            duration: "2024 - 2028",
            currentStatus: "2nd Semester",
            icon: <FaGraduationCap />,
            courses: [
                { name: "Computer Science", icon: <FaLaptopCode /> },
                { name: "C Programming", icon: <FaCode /> },
                { name: "C++ Programming", icon: <FaCode /> },
                { name: "Java Programming", icon: <FaCode /> },
                { name: "Engineering Physics", icon: <FaAtom /> },
                { name: "Engineering Chemistry", icon: <FaAtom /> },
                { name: "Engineering Mathematics", icon: <FaCode /> },
            ],
            highlights: [
                "Currently in the 2nd semester, focusing on advanced topics in Programming and Engineering",
                "Learning core programming languages: C, C++, and Java",
                "Actively working on projects such as Attendance Lookup and contributing to various personal development initiatives",
                "Passionate about exploring cutting-edge technologies like AI, full-stack development, and responsive web design"
            ]
        },
        {
            type: "school",
            degree: "Class 12",
            major: "SCIENCE with Mathematics",
            institution: "CORONA UNIVERSAL SCHOOL",
            duration: "2024",
            board: "CBSE",
            icon: <FaSchool />,
            courses: [
                { name: "Computer Science", icon: <FaLaptopCode /> },
                { name: "Python Programming", icon: <FaPython /> },
                { name: "Mathematics", icon: <FaCode /> },
                { name: "Physics", icon: <FaAtom /> },
                { name: "Chemistry", icon: <FaAtom /> }
            ],
            highlights: [
                "Secured 85% in CBSE Board Examinations",
                "Mainly focused on Computer Science and Programming Languages like Python",
                "Developed strong foundation in Mathematics and Sciences",
                "Participated in various coding competitions and workshops"
            ]
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentCard((prev) => (prev + 1) % 2);
                setIsAnimating(false);
            }, 1200); // Match this with animation duration
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        if (currentCard === index || isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentCard(index);
            setIsAnimating(false);
        }, 1200);
    };

    const education = educationData[currentCard];

    return (
        <div className="education-container">
            <h1 className="education-title">Education</h1>
            <div className="education-content">
                <div className={`education-card ${!isAnimating ? 'fade-in' : ''}`}>
                    <div className="degree-header">
                        <div className="degree-icon">{education.icon}</div>
                        <div className="degree-info">
                            <h2>{education.degree}</h2>
                            <h3>{education.major}</h3>
                        </div>
                    </div>

                    <div className="institution-info">
                        <p className="institution">{education.institution}</p>
                        {education.type === 'school' && <p className="board">Board: {education.board}</p>}
                        <p className="duration">
                            {education.type === 'school' ? `Year of Completion: ${education.duration}` : education.duration}
                        </p>
                        {education.type === 'college' && (
                            <p className="current-status">Current Status: {education.currentStatus}</p>
                        )}
                    </div>

                    <div className="courses-section">
                        <h3>Current Courses</h3>
                        <div className="courses-grid">
                            {education.courses.map((course, index) => (
                                <div key={index} className="course-item">
                                    {course.icon}
                                    <span>{course.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="highlights-section">
                        <h3>Key Highlights</h3>
                        <ul className="highlights-list">
                            {education.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="education-dots">
                {[0, 1].map((index) => (
                    <span 
                        key={index} 
                        className={`dot ${currentCard === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Education; 