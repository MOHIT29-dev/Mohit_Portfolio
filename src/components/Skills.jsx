import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        items: ["C++", "C", "Python", "JavaScript", "SQL"]
    },
    {
        category: "Frontend",
        items: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "HTML/CSS"]
    },
    {
        category: "Backend & Tools",
        items: ["Node.js", "MongoDB", "Figma", "Git", "OpenCV"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-8 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-sm font-light text-gray-500 uppercase tracking-widest mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {skillsData.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-xl font-display font-medium mb-6 border-b border-white/20 pb-4 inline-block w-full">
                                {group.category}
                            </h3>
                            <ul className="space-y-3">
                                {group.items.map((skill) => (
                                    <li key={skill} className="text-lg text-gray-400 hover:text-white transition-colors cursor-default">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
