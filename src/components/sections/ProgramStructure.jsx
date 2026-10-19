import React from 'react'
import { motion } from 'framer-motion'
import { HiCalendar, HiCheckCircle } from 'react-icons/hi'

const ProgramStructure = () => {
    const weeks = [
        {
            week: 1,
            title: 'Foundation & Self-Assessment',
            topics: ['Understanding your career goals', 'Skills inventory assessment', 'Identifying strengths & areas for growth'],
        },
        {
            week: 2,
            title: 'CV & Personal Branding',
            topics: ['CV writing best practices', 'Cover letter essentials', 'Building your personal brand'],
        },
        {
            week: 3,
            title: 'LinkedIn & Digital Presence',
            topics: ['LinkedIn profile optimization', 'Professional networking online', 'Building your digital footprint'],
        },
        {
            week: 4,
            title: 'Workplace Soft Skills',
            topics: ['Communication excellence', 'Teamwork & collaboration', 'Problem-solving mindset'],
        },
        {
            week: 5,
            title: 'Interview Mastery',
            topics: ['Interview preparation techniques', 'Mock interview sessions', 'Handling tough questions'],
        },
        {
            week: 6,
            title: 'Career Launch',
            topics: ['Final skill assessment', 'Talent pool onboarding', 'Employer matchmaking prep'],
        },
    ]

    return (
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full" style={{ display: 'none' }}></div>
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
                        Program
                         Structure
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl">
                        A carefully designed curriculum that takes you from where you are to where you want to be.
                    </p>
                </motion.div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {weeks.map((week, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative bg-mist rounded-xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-orange-100/50 transition-all duration-300 h-full">
                                {/* Week Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-4 py-2 bg-orange-600 text-white font-bold text-sm rounded-full shadow-orange-500/20">
                                        Week {week.week}
                                    </span>
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                                        <HiCalendar className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {week.title}
                                </h3>

                                {/* Topics */}
                                <ul className="space-y-2">
                                    {week.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex} className="flex items-start gap-3">
                                            <HiCheckCircle className="w-5 h-5 text-night flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600 text-sm">{topic}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Progress Indicator */}
                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>Progress</span>
                                        <span>{Math.round((index + 1) / 6 * 100)}%</span>
                                    </div>
                                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${((index + 1) / 6) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className="h-full bg-orange-600 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center px-6 py-4 bg-mist border border-line rounded-lg">
                        <HiCheckCircle className="w-6 h-6 text-night mr-3" />
                        <p className="text-gray-700">
                            <span className="font-semibold">100% Virtual Program</span> · Flexible learning that fits your schedule
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ProgramStructure
