import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiPhotograph, HiArrowRight } from 'react-icons/hi'
import hiregroundimg from "../../assets/images/hireground.jpg"

const CareerFairTeaser = () => {
    return (
        <section className="relative py-16 lg:py-24 bg-night-deep overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full" style={{ display: 'none' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative group"
                    >
                        <div className="relative overflow-hidden rounded-xl">
                            <img
                                src={hiregroundimg}
                                alt="HireGround Career Fair 2025"
                                className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-500"
                            />
                            <div className="absolute inset-0"></div>

                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 right-6">
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="hidden absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center lg:text-left"
                    >

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            HireGround Career Fair
                             2025
                        </h2>

                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            We successfully hosted our first career fair, connecting hundreds of young Nigerians with employers and career opportunities. See what happened and relive the moments.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-400">1000+</div>
                                <div className="text-sm text-gray-400">Attendees</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-400">10+</div>
                                <div className="text-sm text-gray-400">Companies</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-400">6hrs</div>
                                <div className="text-sm text-gray-400">Of Training</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link to="/career-fair-2025">
                            <motion.button
                                className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-md text-white font-semibold hover:bg-white/20 transition-all duration-300"
                            >
                                See What Happened
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CareerFairTeaser
