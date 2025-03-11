import React from 'react'
import './AboutSkills.css'
// Import icons from react-icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaPython, FaJava } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiCplusplus, SiC } from 'react-icons/si'

const AboutSkills = () => {
    const skills = [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'C', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Java', icon: <FaJava /> }
    ];

    const aboutPoints = [
        "🎓 Currently pursuing B.Tech in Computer Science at Amity University Jharkhand",
        "👶 Started programming at a young age and now at 19, mastered multiple technologies",
        "🚀 Quick learner with the ability to adapt to new programming languages rapidly",
        "💻 Full Stack Developer specializing in MERN Stack development",
        "⚡ Self-taught programmer who learned everything from scratch through hands-on projects",
        "🎯 Built confidence through consistent project development and practical implementation",
        "🔧 Experience in developing dynamic websites for local businesses and for self use",
        "📚 Committed to continuous learning and staying updated with latest technologies"
    ];

    return (
        <div className="container">
            <div className="content-container">
                <section className="about-section">
                    <h1 className="section-title">About Me</h1>
                    <div className="about-content">
                        <ul className="about-points">
                            {aboutPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="skills-section">
                    <h2 className="section-title">Skills</h2>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div 
                                key={index} 
                                className="skill-item slide-in-right"
                            >
                                <div className="skill-icon">{skill.icon}</div>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutSkills
