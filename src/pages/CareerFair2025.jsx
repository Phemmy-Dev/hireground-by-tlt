import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import WaitlistSection from '../components/sections/WaitlistSection'
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

            <PageHero
                kicker="Event Completed"
                title="HireGround Career Fair 2025"
                intro="A groundbreaking event that brought together talent, employers, and career experts in Ilorin, Kwara State."
                image={hiregroundimg}
                imageAlt="HireGround Career Fair 2025"
            >
                <dl className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/30 max-w-3xl">
                    {highlights.map((stat) => (
                        <div key={stat.label} className="pt-5 pr-4">
                            <dt className="sr-only">{stat.label}</dt>
                            <dd className="flex items-center gap-2 text-white font-bold text-xl">
                                <stat.icon className="w-5 h-5 text-sun" />
                                {stat.value}
                            </dd>
                            <dd className="text-white/70 text-sm mt-1">{stat.label}</dd>
                        </div>
                    ))}
                </dl>
            </PageHero>

            {/* About the Event */}
            <section className="py-20 bg-mist">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
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
                            className="bg-white rounded-xl p-8 border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Highlights</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {eventHighlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-sun rounded-full flex items-center justify-center flex-shrink-0">
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

            {/* Waitlist Section */}
            <WaitlistSection />

            {/* The Story */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-mist rounded-xl p-8 lg:p-12 border border-line"
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
            <section className="py-20 bg-forest-deep">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="inline-flex items-center px-5 py-2 bg-sun/20 border border-forest/40 rounded-md text-sun font-semibold text-sm mb-6">
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: 0 }}
                                className="w-2 h-2 bg-sun rounded-full mr-2"
                            />
                            Now Open
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Continue the Journey with
                             HireGround Academy
                        </h2>

                        <p className="text-xl text-gray-300 mb-8">
                            The Career Fair was just the beginning. Join our 6-week virtual program to take your career readiness to the next level.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/academy">
                                <motion.button
                                    className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-bold rounded-md shadow-orange-500/25"
                                >
                                    <HiAcademicCap className="w-5 h-5 mr-2" />
                                    Explore HireGround Academy
                                </motion.button>
                            </Link>

                            <a
                                href="https://forms.gle/pGwPAfz6VLy26mtZ9"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.button
                                    className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-md"
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
