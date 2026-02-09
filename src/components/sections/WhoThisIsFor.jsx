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
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

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
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-orange-300 font-semibold text-sm mb-6"
                    >
                        <HiHeart className="w-4 h-4 mr-2" />
                        Who Should Apply
                    </motion.span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Is This
                        <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> For You?</span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="group relative"
                        >
                            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 overflow-hidden">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-300 rounded-3xl"></div>

                                <div className="relative z-10">
                                    {/* Icon & Highlight Badge */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
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
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full group-hover:from-orange-500/20 transition-all duration-300"></div>
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
                    <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-md border border-orange-500/20 rounded-2xl">
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
