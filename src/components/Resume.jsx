import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Resume = () => {
    return (
        <section id="resume" className="py-32 px-8 bg-black text-white relative">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <motion.h2
                        className="text-sm font-light text-gray-500 uppercase tracking-widest"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Resume
                    </motion.h2>

                    <motion.a
                        href="/Mohit_KumarCV.pdf"
                        download="Mohit_KumarCV.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 md:mt-0 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Download size={20} />
                        Download PDF
                    </motion.a>
                </div>

                {/* The element that gets converted to PDF */}
                <div id="resume-content" className="bg-zinc-950 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden text-white transition-colors duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 border-b border-white/10 pb-8">
                        <img
                            src={profileImg}
                            alt="Mohit"
                            className="w-32 h-32 rounded-full object-cover border-2 border-white/20"
                            crossOrigin="anonymous"
                        />
                        <div className="text-center md:text-left">
                            <h3 className="text-4xl font-display font-medium mb-2">Mohit</h3>
                            <p className="text-xl text-gray-400 mb-4">Computer Science Engineering Undergraduate</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500">
                                <span>mohit29.dev@gmail.com</span>
                                <span>•</span>
                                <a href="https://github.com/MOHIT29-dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                                <span>•</span>
                                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {/* Summary */}
                        <div>
                            <h4 className="text-lg font-display uppercase tracking-widest text-gray-500 mb-4">About Me</h4>
                            <p className="text-gray-300 leading-relaxed">
                                I build performant, interactive web experiences and intelligent computer vision systems. Passionate about frontend performance, animation-driven interfaces, and taking ownership from debugging to final delivery.
                            </p>
                        </div>

                        {/* Experience */}
                        <div>
                            <h4 className="text-lg font-display uppercase tracking-widest text-gray-500 mb-4">Experience & Projects</h4>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-xl font-medium">Lane-Aware Trajectory Prediction</h5>
                                    <p className="text-sm text-gray-500 mb-2">Computer Vision | Python, OpenCV, NumPy</p>
                                    <p className="text-gray-300">Developed real-time lane detection and trajectory prediction systems for autonomous vehicles.</p>
                                </div>
                                <div>
    <h5 className="text-xl font-medium">Real-Time Bus Tracking System</h5>
    <p className="text-sm text-gray-500 mb-2">Full Stack | React, Node.js, Socket.io, WebSockets</p>
    <p className="text-gray-300">
        Built a full-stack real-time bus tracking system with live vehicle updates and low-latency communication using WebSockets and an event-driven client-server architecture.
    </p>
</div>
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h4 className="text-lg font-display uppercase tracking-widest text-gray-500 mb-4">Education</h4>
                            <div>
                                <h5 className="text-xl font-medium">Jaypee University of Information Technology</h5>
                                <p className="text-gray-400">B.Tech in Computer Science and Engineering (2022 – 2026)</p>
                                <p className="text-gray-500 mt-1">GPA: 7.83 / 10.0</p>
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <h4 className="text-lg font-display uppercase tracking-widest text-gray-500 mb-4">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                                {["C++", "C", "Python", "JavaScript", "SQL", "React", "Tailwind CSS", "Node.js", "MongoDB", "Git", "OpenCV"].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Certifications / Achievements */}
<div>
    <h4 className="text-lg font-display uppercase tracking-widest text-gray-500 mb-4">
        Certifications & Achievements
    </h4>

    <div className="space-y-6">
        <div>
            <h5 className="text-xl font-medium">
                Machine Learning Foundation
            </h5>
            <p className="text-gray-400 mt-1">
                Certified by Infosys Springboard with foundational knowledge of machine learning concepts and techniques.
            </p>
        </div>

        <div>
            <h5 className="text-xl font-medium">
                Explore Machine Learning Using Python
            </h5>
            <p className="text-gray-400 mt-1">
                Completed practical machine learning training using Python, covering core concepts and implementation techniques.
            </p>
        </div>

        <div>
            <h5 className="text-xl font-medium">
                Real-Time System Development
            </h5>
            <p className="text-gray-400 mt-1">
                Built real-time applications using WebSockets and event-driven communication with a focus on performance and scalability.
            </p>
        </div>
    </div>
</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
