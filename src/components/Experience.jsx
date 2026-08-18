import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section className="py-32 px-8 border-t border-white/10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-sm font-light text-gray-500 uppercase tracking-widest mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Experience & Competencies
                </motion.h2>

                <div className="space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-display mb-8">Education</h3>
                        <div className="border-l border-white/20 pl-6 space-y-2">
                            <h4 className="text-xl font-medium">Jaypee University of Information Technology</h4>
                            <p className="text-gray-400">B.Tech in Computer Science and Engineering (2022 – 2026)</p>
                            <p className="text-sm text-gray-500">GPA: 7.83 / 10.0</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-display mb-8">Experience</h3>
                        <div className="border-l border-white/20 pl-6 space-y-10">
                            <div className="space-y-2">
                                <h4 className="text-xl font-medium">Frontend Developer Intern – CodeAlpha</h4>
                                <p className="text-gray-400">Remote · June 2025 – July 2025</p>
                                <p className="text-gray-300 leading-relaxed">
                                    Developed responsive web applications using HTML, CSS, JavaScript, and React.js while following modern frontend development practices. Implemented reusable UI components and optimized layouts to improve user experience across desktop and mobile devices. Collaborated remotely on assigned development tasks, debugging issues and delivering features within deadlines.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-xl font-medium">Frontend Developer – IEEE JUIT Student Branch</h4>
                                <p className="text-gray-400">2023 – 2024</p>
                                <p className="text-gray-300 leading-relaxed">
                                    Designed and maintained frontend interfaces for IEEE Student Branch technical events and organizational platforms. Collaborated with cross-functional teams to build responsive and user-friendly web pages using modern frontend technologies.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-display mb-8">Core Competencies</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                "DSA Problem Solving",
                                "Computer Vision Pipelines",
                                "Frontend Performance Optimization",
                                "Debugging & Code Ownership"
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 p-6 rounded-sm border border-white/5 hover:border-white/20 transition-colors">
                                    <p className="text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
