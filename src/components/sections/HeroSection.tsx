"use client";

import { motion } from "framer-motion";
import { FaCamera, FaReact, FaJava } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiSpringboot } from "react-icons/si";

export default function HeroSection() {
    const skillGroups = {
        photography: {
            title: "Photography",
            skills: [
                { icon: <FaCamera />, name: "Wildlife" },
                { icon: null, name: "Birds" },
                { icon: null, name: "Nature" }
            ]
        },
        development: {
            title: "Development",
            skills: [
                { icon: <FaReact />, name: "React" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <FaJava />, name: "Java" },
                { icon: <SiSpringboot />, name: "Spring Boot" }
            ]
        }
    };

    return (
        <section className="hero">
            <div className="hero__container">
                <motion.div 
                    className="hero__content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1 
                        className="hero__title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Bird Photography & <span className="hero__highlight">Development</span>
                    </motion.h1>
                    
                    <motion.p 
                        className="hero__description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Capturing nature&apos;s beauty through photography while building modern web experiences
                        with cutting-edge technologies.
                    </motion.p>

                    <motion.div 
                        className="hero__skills"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {Object.values(skillGroups).map((group, index) => (
                            <motion.div 
                                key={group.title}
                                className="hero__skill-group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                            >
                                <h3 className="hero__skill-title">{group.title}</h3>
                                <div className="hero__skill-items">
                                    {group.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill.name}
                                            className="hero__skill-item"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 1 + (skillIndex * 0.1) }}
                                        >
                                            {skill.icon} {skill.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}