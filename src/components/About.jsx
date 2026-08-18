import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 px-8 bg-black text-white">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-sm font-light text-gray-500 uppercase tracking-widest mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    About
                </motion.h2>

                <div className="text-3xl md:text-5xl font-display font-medium leading-tight space-y-8">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        I am a Computer Science Engineering undergraduate at Jaypee University of Information Technology (2022 – 2026).
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-gray-400"
                    >
                        I’m a full-stack developer who enjoys turning ideas into fast, engaging, and reliable digital experiences. My work spans modern frontend development, backend APIs, and computer vision, with a focus on building systems that are both visually polished and technically robust.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-white font-light mt-8"
                    >
                        From crafting responsive interfaces and interactive animations to developing Python APIs, testing integrations with Postman, and building computer vision solutions, I work across the entire development cycle. I enjoy solving complex problems, optimizing performance, and taking projects from the first line of code to a finished, production-ready experience.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
