import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HiLocationMarker, HiCalendar, HiUsers, HiClock, HiArrowRight, HiAcademicCap } from 'react-icons/hi'
import hiregroundimg from "../assets/images/hireground.jpg"

const CareerFair2025 = () => {
    const highlights = [
        { icon: HiUsers, value: '1000+', label: 'Attendees' },
        { icon: HiCalendar, value: 'December', label: '2025' },
        { icon: HiLocationMarker, value: 'Ilorin', label: 'Kwara State' },
        { icon: HiClock, value: '6 Hours', label: 'Of Training' },
    ]

    const eventHighlights = [
        'Career readiness training sessions',
        'Live CV review and optimization',
        'Interview preparation workshops',
        'Networking with top employers',
        'Industry expert speakers',
        'On-the-spot job opportunities',
    ]

    return (
        <>
            <Helmet>
                <title>HireGround Career Fair 2025 | Event Recap | Ilorin, Kwara State</title>
                <meta name="description" content="Relive the highlights of HireGround Career Fair 2025 - Ilorin's premier career event that connected over 1000 young Nigerians with job opportunities and career training." />
                <meta name="keywords" content="HireGround Career Fair, 2025 event, Ilorin career fair, job fair Nigeria, career event recap" />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={hiregroundimg}
                        alt="HireGround Career Fair 2025"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center px-5 py-2 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-full text-orange-300 font-semibold text-sm mb-6">
                            Event Completed
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            HireGround Career Fair
                            <br />
                            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">2025</span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            A groundbreaking event that brought together talent, employers, and career experts in Ilorin, Kwara State.
                        </p>

                        {/* Event Stats */}
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                            {highlights.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                                >
                                    <stat.icon className="w-6 h-6 text-orange-400" />
                                    <div className="text-left">
                                        <div className="text-white font-bold text-lg">{stat.value}</div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About the Event */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                What Happened at HireGround 2025
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                HireGround Career Fair 2025 marked a significant milestone in career development events in Ilorin.
                                We brought together hundreds of young Nigerians, employers, and industry experts for a day of
                                learning, networking, and career transformation.
                            </p>
                        </motion.div>

                        {/* Event Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Highlights</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {eventHighlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <span className="text-gray-700">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Story */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12 border border-orange-100"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                The Story Behind HireGround
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    It began with a single encounter—a young lady who thought she had ruined her interview
                                    because she didn't ask a single question. That moment revealed something bigger: countless
                                    young Nigerians are stepping into interviews unprepared, not because they lack talent,
                                    but because they've never been taught how to show up.
                                </p>
                                <p>
                                    At The Light Tutors, we've seen it all—candidates logging in from noisy buses, interviews
                                    taken in pyjamas, some even joining from a football pitch. It's not a lack of potential.
                                    It's a lack of preparation.
                                </p>
                                <p className="font-semibold text-orange-700">
                                    That's why we created HireGround.
                                </p>
                                <p>
                                    What started as a small training idea has grown into a nationwide movement. A Career Fair
                                    designed to empower young Nigerians with the skills they need to land jobs and thrive at work.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA to Academy */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="inline-flex items-center px-5 py-2 bg-green-500/20 backdrop-blur-md border border-green-400/40 rounded-full text-green-300 font-semibold text-sm mb-6">
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-2 h-2 bg-green-400 rounded-full mr-2"
                            />
                            Now Open
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Continue the Journey with
                            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> HireGround Academy</span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-8">
                            The Career Fair was just the beginning. Join our 6-week virtual program to take your career readiness to the next level.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/academy">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/25"
                                >
                                    <HiAcademicCap className="w-5 h-5 mr-2" />
                                    Explore HireGround Academy
                                    <HiArrowRight className="w-5 h-5 ml-2" />
                                </motion.button>
                            </Link>

                            <a
                                href="https://forms.gle/pGwPAfz6VLy26mtZ9"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full"
                                >
                                    Apply Now – It's Free
                                </motion.button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default CareerFair2025
