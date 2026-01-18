import { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const projects = [
    {
        title: "Lane-Aware Trajectory Prediction",
        category: "Computer Vision",
        description: "Real-time lane detection and trajectory prediction for autonomous vehicles.",
        tools: "Python, OpenCV, NumPy",
        color: "bg-blue-900"
    },
    {
        title: "Oculto",
        category: "Interactive Web",
        description: "Cuberto-inspired interactive website with magnetic cursor interactions.",
        tools: "GSAP, Shery.js, HTML/CSS",
        color: "bg-purple-900"
    },
    {
        title: "Portfolio Website",
        category: "Design & Dev",
        description: "Minimalist portfolio showcasing projects and skills.",
        tools: "React, Tailwind, Framer Motion",
        color: "bg-zinc-800",
        link: "https://github.com/MOHIT29-dev/Mohit_Portfolio"
    }
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left); // Relative to the container
        y.set(e.clientY - rect.top);
    };

    return (
        <section id="projects" className="py-32 px-8 bg-black relative" onMouseMove={handleMouseMove}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-sm font-light text-gray-500 uppercase tracking-widest mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Selected Projects
                </motion.h2>

                <div className="relative z-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative border-t border-white/20 py-12 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center transition-colors hover:bg-white/5 px-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setActiveProject(index)}
                            onMouseLeave={() => setActiveProject(null)}
                            onClick={() => project.link && window.open(project.link, '_blank')}
                            data-hover
                        >
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-3xl md:text-4xl font-display font-medium mb-2 group-hover:translate-x-4 transition-transform duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 group-hover:translate-x-4 transition-all duration-300 delay-75">
                                    {project.category}
                                </p>
                            </div>
                            <div className="text-right group-hover:-translate-x-4 transition-transform duration-300">
                                <p className="text-sm text-gray-500 mb-1">{project.tools}</p>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-sm underline">View Project</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Preview Image - Following cursor absolutely within section if needed or fixed */}
                {/* Simpler approach: Fixed preview window that shows the active project, OR floating at cursor */}
                {/* We will try floating at cursor but constrained or fixed position for better performance/look in React */}

                <motion.div
                    style={{
                        left: mouseX,
                        top: mouseY,
                        translateX: '-50%',
                        translateY: '-50%'
                    }}
                    className="fixed top-0 left-0 w-[400px] h-[250px] pointer-events-none z-0 hidden md:block overflow-hidden rounded-lg mix-blend-difference"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`absolute inset-0 ${project.color} flex items-center justify-center`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: activeProject === index ? 1 : 0,
                                scale: activeProject === index ? 1 : 0.8
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-white/20 font-display text-4xl font-bold uppercase tracking-wider">
                                {project.category} Preview
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
