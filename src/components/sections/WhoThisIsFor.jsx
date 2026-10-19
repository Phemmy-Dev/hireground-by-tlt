import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiBriefcase, HiSearch, HiHeart } from 'react-icons/hi'

const WhoThisIsFor = () => {
    const audiences = [
        {
            icon: HiAcademicCap,
            title: 'Students',
            description: 'Currently in school and preparing for the workforce. Get ahead of your peers with practical career skills.',
            highlight: 'Final year & recent grads',
        },
        {
            icon: HiBriefcase,
            title: 'Recent Graduates',
            description: 'Finished school but struggling to land your first job? We\'ll help you bridge the gap between education and employment.',
            highlight: '0-2 years post-graduation',
        },
        {
            icon: HiSearch,
            title: 'Job Seekers',
            description: 'Actively looking for opportunities but need structure and guidance to stand out in the competitive job market.',
            highlight: 'Active job hunters',
        },
        {
            icon: HiHeart,
            title: 'Eager Learners',
            description: 'Anyone willing to learn and participate consistently. Your commitment matters more than your background.',
            highlight: 'Growth mindset required',
        },
    ]

    return (
        <section className="relative py-20 lg:py-28 bg-night-deep overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="hidden absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="hidden absolute bottom-1/4 right-0 w-96 h-96 bg-night/10 rounded-full blur-3xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
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

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Is This
                         For You?
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl">
                        HireGround Academy is designed for those ready to invest in their future. See if you fit the profile.
                    </p>
                </motion.div>

                {/* Audience Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 overflow-hidden">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-300 rounded-xl"></div>

                                <div className="relative z-10">
                                    {/* Icon & Highlight Badge */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 rounded-lg bg-orange-600 flex items-center justify-center shadow-orange-500/20">
                                            <audience.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-semibold rounded-full">
                                            {audience.highlight}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {audience.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {audience.description}
                                    </p>
                                </div>

                                {/* Corner Decoration */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full group-hover:from-orange-500/20 transition-all duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center px-8 py-4 border border-orange-500/20 rounded-lg">
                        <p className="text-lg text-gray-300">
                            <span className="text-orange-400 font-semibold">Not sure if you qualify?</span>
                            <span className="mx-2">·</span>
                            Apply anyway! We value commitment over credentials.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhoThisIsFor
