import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiClipboardList, HiSparkles, HiArrowRight } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const WaitlistSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#waitlist' || location.hash === '#register') {
            setTimeout(() => {
                const element = document.getElementById('register') || document.getElementById('waitlist');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        }
    }, [location]);

    return (
        <section id="register" className="py-20 bg-mist relative overflow-hidden">
            {/* Anchor for backwards compatibility */}
            <div id="waitlist" className="absolute top-0"></div>
            {/* Background elements */}
            <div className="hidden absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-200/50 blur-3xl opacity-50 mix-blend-multiply"></div>
            <div className="hidden absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-red-200/50 blur-3xl opacity-50 mix-blend-multiply"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="block text-ember-deep font-semibold mb-4"
                        >
                            Registration Now Live
                        </motion.span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            HireGround Career Fair
                            2026 Registration
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                            Registration is now officially open! Claim your invite ticket today to get access to top speakers, hiring employers, and life-changing career opportunities.
                        </p>
                    </motion.div>

                    {/* Steps Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-xl p-8 shadow-gray-200/50 border border-gray-100 relative group hover:border-orange-300 transition-colors"
                        >
                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg rotate-12 group-hover:rotate-0 transition-transform">
                                1
                            </div>
                            <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center mb-6 mt-2">
                                <HiClipboardList className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Claim Your Ticket</h3>
                            <p className="text-gray-600">
                                Complete your registration on Trankets. It takes less than a minute and secures your official event ticket.
                            </p>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white rounded-xl p-8 shadow-gray-200/50 border border-gray-100 relative group hover:border-line transition-colors"
                        >
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-forest rounded-xl flex items-center justify-center text-white font-bold text-lg -rotate-12 group-hover:rotate-0 transition-transform">
                                2
                            </div>
                            <div className="w-14 h-14 bg-mist rounded-lg flex items-center justify-center mb-6 mt-2">
                                <FaWhatsapp className="w-7 h-7 text-forest" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Join the Community</h3>
                            <p className="text-gray-600">
                                Join our exclusive WhatsApp community to connect with other attendees, ask questions, and receive live updates.
                            </p>
                        </motion.div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center"
                    >
                        <a
                            href="https://trankets.com/invite/hireground-kwara-career-fair-2026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-600 hover:from-orange-600 hover:to-red-600 rounded-md shadow-orange-500/25 transition-all duration-300 min-w-[250px]"
                        >
                            <span className="flex items-center gap-3">
                                Register on Trankets Now
                            </span>
                        </a>
                        <p className="mt-4 text-sm text-gray-500 font-medium">Limited spots available • Reserve your ticket today</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WaitlistSection
