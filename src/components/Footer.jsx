import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 px-8 border-t border-white/10 bg-black text-center md:text-left">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0">
                    <h2 className="text-4xl md:text-6xl font-display font-medium mb-4">Let's Connect</h2>
                    <a href="mailto:mohitkumar291202@gmail.com" className="text-xl text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1" data-magnetic>
                        mohitkumar291202@gmail.com
                    </a>
                </div>

                <div className="flex gap-8">
                    <a href="https://github.com/MOHIT29-dev" target="_blank" rel="noopener noreferrer" className="uppercase text-sm tracking-widest hover:underline" data-magnetic>
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/mohitkr29" target="_blank" rel="noopener noreferrer" className="uppercase text-sm tracking-widest hover:underline" data-magnetic>
                        LinkedIn
                    </a>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-gray-600">
                <p>© 2026 Mohit Kumar. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="https://github.com/MOHIT29-dev/Mohit_Portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        View Source
                    </a>
                    <span>|</span>
                    <p>Built with React, Tailwind & Framer Motion</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
