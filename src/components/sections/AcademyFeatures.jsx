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
            color: 'bg-ember',
            bgColor: '',
        },
        {
            icon: HiLightBulb,
            title: 'Soft Skills Development',
            description: 'Build essential communication, teamwork, and problem-solving abilities.',
            color: 'bg-azure',
            bgColor: '',
        },
        {
            icon: HiDocumentText,
            title: 'CV & LinkedIn Support',
            description: 'Get hands-on help crafting a standout CV and optimizing your LinkedIn profile.',
            color: 'bg-kelly',
            bgColor: '',
        },
        {
            icon: HiUserGroup,
            title: 'Interview Preparation',
            description: 'Practice with mock interviews and receive personalized feedback from mentors.',
            color: 'bg-gold',
            bgColor: '',
        },
        {
            icon: HiChartBar,
            title: 'Skill Assessment',
            description: 'Track your growth with pre and post evaluations to measure real progress.',
            color: 'bg-pink',
            bgColor: '',
        },
        {
            icon: HiSparkles,
            title: 'Talent Pool Access',
            description: 'Get added to HireGround\'s talent pool for future job and internship recommendations.',
            color: 'bg-turquoise',
            bgColor: '',
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
        <section id="learn-more" className="relative py-20 lg:py-32 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="hidden absolute top-0 left-1/4 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
                <div className="hidden absolute bottom-0 right-1/4 w-96 h-96 bg-mist rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Everything You Need to
                        <br />
                        
                            Launch Your Career
                        
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl">
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
                            className="group relative bg-white rounded-xl p-8 shadow-gray-200/50 border border-gray-100 hover:border-orange-200/50 transition-all duration-300"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 hidden transition-opacity duration-300 rounded-3xl`}></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-14 h-14 mb-6 rounded-2xl ${feature.color} flex items-center justify-center`}>
                                    <feature.icon className="w-7 h-7 text-ink" />
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
                                    <div className={`w-full h-full hidden`}></div>
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
                        Cohort 1 applications are currently closed. Stay tuned for our next cohort!
                    </p>
                    <div
                        className="inline-flex items-center px-8 py-4 bg-gray-400 text-white font-semibold rounded-md opacity-80 cursor-not-allowed"
                    >
                        Applications Closed
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AcademyFeatures
