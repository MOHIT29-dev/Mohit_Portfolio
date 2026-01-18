import { motion } from 'framer-motion';

const Navbar = () => {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-40 mix-blend-difference text-white">
            <a href="#" className="text-xl font-display font-bold tracking-tight uppercase" data-magnetic>
                MK
            </a>
            <div className="flex gap-8">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="font-medium text-sm uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity"
                        data-magnetic
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
