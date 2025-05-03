import React, { useState, useEffect } from 'react';
import './Projects.css';
import { FaPython, FaRobot, FaChartLine, FaHtml5, FaCss3Alt, FaUserCheck, FaCamera, FaGraduationCap, FaStore, FaComments } from 'react-icons/fa';
import { SiSelenium, SiMongodb, SiExpress, SiNodedotjs, SiOpenai, SiReact, SiOpencv, SiPandas, SiNumpy } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';

const Projects = () => {
    const [currentSet, setCurrentSet] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const projects = [
        {
            id: 7,
            title: "Chatting Web App",
            description: "A full-stack chatting application with user registration, admin approval, real-time chat, friend management, and admin user removal. Built with MERN stack and real-time communication.",
            icon: <FaComments />,
            techStack: [
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "React.js", icon: <SiReact /> },
                { name: "Node.js", icon: <SiNodedotjs /> }
            ],
            features: [
                "User registration and admin approval system",
                "Real-time chat with friends",
                "Friend management (add/remove friends)",
                "Admin panel for user management",
                "Secure and scalable architecture"
            ],
            link: "https://chat-it-app.vercel.app/",
            isFeatured: true
        },
        {
            id: 1,
            title: "Jarvis AI with Voice Assistance",
            description: "A Python-based AI system designed to automate daily tasks through voice commands. Jarvis can perform web searches, control PC functions, and execute tasks like playing music or sending emails, making day-to-day activities more efficient.",
            icon: <FaRobot />,
            techStack: [
                { name: "Python", icon: <FaPython /> },
                { name: "OpenAI", icon: <SiOpenai /> },
                { name: "SpeechRecognition", icon: <FaRobot /> },
                { name: "Pyttsx3", icon: <FaRobot /> },
                { name: "Selenium", icon: <SiSelenium /> }
            ],
            features: [
                "Voice-based commands for hands-free operation",
                "Task automation like opening apps and retrieving online information",
                "User-friendly interface and reliable voice recognition"
            ]
        },
        {
            id: 4,
            title: "Face Recognition Attendance System",
            description: "A Python-based system to automate attendance recording using facial recognition. Developed specifically for educational institutions, this system streamlines the process of marking attendance.",
            icon: <FaCamera />,
            techStack: [
                { name: "Python", icon: <FaPython /> },
                { name: "OpenCV", icon: <SiOpencv /> },
                { name: "NumPy", icon: <SiNumpy /> },
                { name: "Pandas", icon: <SiPandas /> }
            ],
            features: [
                "Real-time facial recognition for attendance",
                "Secure storage of attendance data in CSV format",
                "Easy integration into existing school systems"
            ]
        },
        {
            id: 3,
            title: "Expense Tracker",
            description: "A web application that helps users manage their finances by tracking income and expenses. It features a login system for multiple users, ensuring personalized data for each account.",
            icon: <FaChartLine />,
            techStack: [
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <DiJavascript /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ],
            features: [
                "Secure multi-user login and data storage",
                "Interactive dashboard with expense categories and visualizations",
                "Responsive design for mobile and desktop"
            ]
        },
        {
            id: 2,
            title: "Attendance Lookup",
            description: "A system to help students and administrators manage attendance efficiently. Students can mark attendance by day or subject and track absences, while admins can add or remove users.",
            icon: <FaUserCheck />,
            techStack: [
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <DiJavascript /> },
                { name: "React.js", icon: <SiReact /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ],
            features: [
                "Secure login system for students and administrators",
                "Interactive attendance tracking and analytics",
                "Admin panel for managing users and data"
            ]
        },
        {
            id: 5,
            title: "Course Selling Page for Digital Products",
            description: "A fully functional e-commerce platform for selling digital courses. This website was tailored for a YouTube channel with over 3,000 subscribers, offering an easy course access system.",
            icon: <FaGraduationCap />,
            techStack: [
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <DiJavascript /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ],
            features: [
                "Integrated access code system for course purchases",
                "User-friendly interface for seamless navigation",
                "Mobile-first responsive design"
            ]
        },
        {
            id: 6,
            title: "Dynamic Websites for Local Shops",
            description: "Designed and developed responsive websites for local businesses. These websites are tailored to the unique needs of each shop, ensuring an engaging online presence.",
            icon: <FaStore />,
            techStack: [
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <DiJavascript /> }
            ],
            features: [
                "Customized design to fit individual business requirements",
                "SEO-friendly structure to increase online visibility",
                "Optimized for both desktop and mobile devices"
            ]
        }
    ];

    const totalSets = Math.ceil(projects.length / 2);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSet((prev) => (prev + 1) % totalSets);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const currentProjects = projects.slice(currentSet * 2, (currentSet * 2) + 2);

    const handleTechStackHover = (isEntering) => {
        setIsPaused(isEntering);
    };

    return (
        <div id="projects" className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-grid">
                {currentProjects.map((project) => (
                    <div 
                        key={project.id} 
                        className="project-card fade-in"
                    >
                        <div className="project-header">
                            <div className="project-icon">{project.icon}</div>
                            <h2 className="project-title">{project.title}</h2>
                            {project.isFeatured && (
                                <span className="featured-badge">Featured</span>
                            )}
                        </div>
                        <p className="project-description">{project.description}</p>
                        
                        <div className="tech-stack">
                            <h3>Tech Stack</h3>
                            <div className="tech-icons">
                                {project.techStack.map((tech, i) => (
                                    <div 
                                        key={i} 
                                        className="tech-item" 
                                        title={tech.name}
                                        onMouseEnter={() => handleTechStackHover(true)}
                                        onMouseLeave={() => handleTechStackHover(false)}
                                    >
                                        {tech.icon}
                                        <span className="tech-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="features">
                            <h3>Key Features</h3>
                            <ul>
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {project.link && (
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="view-project-btn"
                            >
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
            <div className="project-dots">
                {Array(totalSets).fill(0).map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${currentSet === index ? 'active' : ''}`}
                        onClick={() => setCurrentSet(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;