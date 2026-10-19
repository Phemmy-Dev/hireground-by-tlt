import React from 'react'
import { motion } from 'framer-motion'
import { HiClipboardList, HiVideoCamera, HiMail, HiCheckCircle } from 'react-icons/hi'

const HowToApply = () => {
    const steps = [
        {
            step: '01',
            icon: HiClipboardList,
            title: 'Complete Registration',
            description: 'Fill out the registration form and complete a short pre-assessment to help us understand your current skill level.',
            action: 'Takes about 10 minutes',
        },
        {
            step: '02',
            icon: HiVideoCamera,
            title: 'Video Introduction',
            description: 'Shortlisted applicants will be invited to submit a brief video introduction. This helps us get to know you better.',
            action: 'Only for shortlisted candidates',
        },
        {
            step: '03',
            icon: HiMail,
            title: 'Confirmation Email',
            description: 'Final participants will be contacted via email with program details, schedule, and everything you need to get started.',
            action: 'Check your inbox!',
        },
    ]

    return (
        <section className="relative py-20 lg:py-28 bg-mist overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-px"></div>
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
                        How to
                         Apply
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl">
                        Getting started is easy. Follow these three simple steps to join HireGround Academy.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-orange-50 hidden sm:block lg:transform lg:-translate-x-1/2"></div>

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col lg:flex-row items-center gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Step Number Circle */}
                                <div className="relative z-10 flex-shrink-0">
                                    <motion.div
                                        className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center shadow-orange-500/30"
                                    >
                                        <span className="text-white font-bold text-xl">{step.step}</span>
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                                    <motion.div
                                        className="bg-white rounded-xl p-8 shadow-gray-200/50 border border-gray-100 hover:border-orange-200/50 transition-all duration-300"
                                    >
                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                                <step.icon className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {step.description}
                                        </p>

                                        <p className="font-semibold text-ember-deep">
                                            {step.action}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-orange-600 rounded-xl p-8 lg:p-12 max-w-3xl mx-auto">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-orange-100 mb-8 text-lg">
                            Cohort 1 applications are currently closed. Stay tuned for our next cohort!
                        </p>
                        <div
                            className="inline-flex items-center px-8 py-4 bg-gray-400 text-white font-bold rounded-md opacity-80 cursor-not-allowed"
                        >
                            <HiClipboardList className="w-5 h-5 mr-2" />
                            Applications Closed
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HowToApply
