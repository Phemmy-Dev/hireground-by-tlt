import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import data from '../menuitems.json';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo-black2.png';
import React from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Check if we're on a light background page
    const isLightPage = location.pathname === '/who-we-are' || location.pathname === '/contact' || location.pathname === '/services' || location.pathname === '/departments';

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 bg-white/95 backdrop-blur-lg shadow-xl border border-gray-200/30 rounded-2xl"
            >
                <div className="flex justify-between items-center py-4 px-6 lg:px-8">
                    {/* Logo */}
                    <motion.div 
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to={'/'} className="block">
                            <img 
                                src={Logo} 
                                alt="HireGround Logo" 
                                className="h-8 sm:h-11 w-auto object-contain transition-all duration-300 hover:brightness-110 drop-shadow-lg"
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link 
                                    to={item.path} 
                                    className={`relative px-4 py-2 text-base font-medium transition-all duration-300 group ${
                                        location.pathname === item.path
                                            ? 'text-orange-600' 
                                            : 'text-gray-700 hover:text-orange-600'
                                    }`}
                                >
                                    {item.title}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                                        location.pathname === item.path 
                                            ? 'scale-x-100 bg-gradient-to-r from-orange-500 to-red-500' 
                                            : 'bg-gradient-to-r from-orange-500 to-red-500'
                                    }`}></span>
                                </Link>
                            </motion.div>
                        ))}
                        
                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <a 
                                href="/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-700 hover:to-red-700 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Tickets Coming Soon
                            </a>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="lg:hidden p-3 rounded-xl transition-all duration-300 text-gray-700 hover:bg-gray-100"
                        onClick={toggleNavbar}
                        aria-label="Toggle navigation menu"
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </motion.div>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden border-t border-gray-200/20 bg-white/95 backdrop-blur-lg rounded-b-2xl overflow-hidden"
                        >
                            <div className="py-4 px-6 space-y-2">
                                {data.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Link 
                                            to={item.path} 
                                            className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                                                location.pathname === item.path
                                                    ? 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 border-l-4 border-orange-500'
                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.div>
                                ))}
                                
                                {/* Mobile CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                    className="pt-4 border-t border-gray-200/50"
                                >
                                    <a 
                                        href="/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Tickets Coming Soon.
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar
