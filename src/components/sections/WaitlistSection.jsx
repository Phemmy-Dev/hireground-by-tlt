import React from 'react'
import { motion } from 'framer-motion'
import { HiClipboardList, HiSparkles, HiArrowRight } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

const WaitlistSection = () => {
    return (
        <section id="waitlist" className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-200/50 blur-3xl opacity-50 mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-red-200/50 blur-3xl opacity-50 mix-blend-multiply"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-5 py-2 bg-orange-100 rounded-full text-orange-700 font-semibold text-sm mb-6 border border-orange-200"
                        >
                            <HiSparkles className="w-4 h-4 mr-2" />
                            Returning June 2026
                        </motion.span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            HireGround Career Fair
                            <span className="block mt-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">2026 Waitlist</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mx-auto max-w-2xl">
                            Be the first to know! Join the waitlist to get early access to speakers, exclusive opportunities, and special discounts on tickets when we launch.
                        </p>
                    </motion.div>

                    {/* Steps Container */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative group hover:border-orange-300 transition-colors"
                        >
                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                                1
                            </div>
                            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 mt-2">
                                <HiClipboardList className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fill the Form</h3>
                            <p className="text-gray-600">
                                Complete our short waitlist registration form. It takes less than a minute and secures your early access spot.
                            </p>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative group hover:border-green-300 transition-colors"
                        >
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg -rotate-12 group-hover:rotate-0 transition-transform">
                                2
                            </div>
                            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 mt-2">
                                <FaWhatsapp className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Join the Community</h3>
                            <p className="text-gray-600">
                                After submitting the form, click the link on the success page to join our exclusive WhatsApp community for insider updates.
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
                            href="https://forms.gle/LikSyV11viUDMA5p8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all duration-300 min-w-[250px]"
                        >
                            <span className="flex items-center gap-3">
                                Join the Waitlist Now
                                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <p className="mt-4 text-sm text-gray-500 font-medium">Limited spots available for early access discounts</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WaitlistSection
