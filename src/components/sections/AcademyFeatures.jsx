import React from 'react'
import { motion } from 'framer-motion'
import {
    HiBriefcase,
    HiLightBulb,
    HiDocumentText,
    HiUserGroup,
    HiChartBar,
    HiSparkles
} from 'react-icons/hi'

const AcademyFeatures = () => {
    const features = [
        {
            icon: HiBriefcase,
            title: 'Employability Training',
            description: 'Master workplace readiness skills that employers actively seek in candidates.',
            color: 'from-orange-500 to-red-500',
            bgColor: 'from-orange-500/10 to-red-500/10',
        },
        {
            icon: HiLightBulb,
            title: 'Soft Skills Development',
            description: 'Build essential communication, teamwork, and problem-solving abilities.',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'from-blue-500/10 to-cyan-500/10',
        },
        {
            icon: HiDocumentText,
            title: 'CV & LinkedIn Support',
            description: 'Get hands-on help crafting a standout CV and optimizing your LinkedIn profile.',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'from-purple-500/10 to-pink-500/10',
        },
        {
            icon: HiUserGroup,
            title: 'Interview Preparation',
            description: 'Practice with mock interviews and receive personalized feedback from mentors.',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'from-green-500/10 to-emerald-500/10',
        },
        {
            icon: HiChartBar,
            title: 'Skill Assessment',
            description: 'Track your growth with pre and post evaluations to measure real progress.',
            color: 'from-amber-500 to-orange-500',
            bgColor: 'from-amber-500/10 to-orange-500/10',
        },
        {
            icon: HiSparkles,
            title: 'Talent Pool Access',
            description: 'Get added to HireGround\'s talent pool for future job and internship recommendations.',
            color: 'from-rose-500 to-red-500',
            bgColor: 'from-rose-500/10 to-red-500/10',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    return (
        <section id="learn-more" className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-5 py-2 bg-orange-100 rounded-full text-orange-700 font-semibold text-sm mb-6"
                    >
                        <HiSparkles className="w-4 h-4 mr-2" />
                        What You'll Gain
                    </motion.span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Everything You Need to
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                            Launch Your Career
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our comprehensive program covers all aspects of career readiness, from foundational skills to direct employer connections.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:border-orange-200/50 transition-all duration-300"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative Corner */}
                                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${feature.color} opacity-20`}></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-600 mb-6 text-lg">
                        Ready to transform your career prospects?
                    </p>
                    <a
                        href="https://forms.gle/pGwPAfz6VLy26mtZ9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
                    >
                        Start Your Application
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default AcademyFeatures
