import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center px-8 pt-20">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-4">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[12vw] leading-[0.9] font-display font-bold tracking-tighter uppercase"
                    >
                        Mohit Kumar
                    </motion.h1>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                        className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0"
                    >
                        <img
                            src={profileImg}
                            alt="Mohit"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full border-t border-white/20 pt-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg md:text-xl font-light text-white/80 max-w-md"
                    >
                        Frontend Developer · Computer Vision · CSE<br />
                        Based in India
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 md:mt-0 text-right hidden md:block"
                    >
                        <span className="block text-sm text-gray-400 mb-2">Scroll to explore</span>
                        <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto animate-bounce" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
