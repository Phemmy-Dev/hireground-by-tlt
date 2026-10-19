import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import data from '../menuitems.json';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo-black2.png';
import React from 'react';

const REGISTER_URL = 'https://trankets.com/invite/hireground-kwara-career-fair-2026';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b border-line">
                <div className="max-w-7xl mx-auto flex justify-between items-center h-16 xl:h-[4.5rem] px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="block shrink-0">
                        <img
                            src={Logo}
                            alt="HireGround home"
                            className="h-7 sm:h-8 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center gap-1">
                        {data.map((item) => {
                            const active = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    aria-current={active ? 'page' : undefined}
                                    className={`px-3 py-2 text-[15px] font-medium whitespace-nowrap border-b-2 transition-colors duration-150 ${
                                        active
                                            ? 'border-ember text-ink'
                                            : 'border-transparent text-muted hover:text-ink'
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}

                        <a
                            href={REGISTER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary ml-4 px-5 py-2.5 text-sm"
                        >
                            Register Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden p-2 -mr-2 text-ink"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="xl:hidden border-t border-line bg-white overflow-hidden"
                        >
                            <div className="px-4 sm:px-6 py-3">
                                {data.map((item) => {
                                    const active = location.pathname === item.path;
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            aria-current={active ? 'page' : undefined}
                                            className={`block py-3 text-lg font-medium border-l-4 pl-3 ${
                                                active
                                                    ? 'border-ember text-ink'
                                                    : 'border-transparent text-muted hover:text-ink'
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    );
                                })}
                                <a
                                    href={REGISTER_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full mt-3 mb-2"
                                >
                                    Register Now
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Mobile Menu Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40 xl:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar
