import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiUsers, FiStar } from 'react-icons/fi'

const Cta = () => {
  const features = [
    {
      icon: <FiCalendar className="w-5 h-5" />,
      text: "Early Bird Pricing"
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      text: "Network with Experts"
    },
    {
      icon: <FiStar className="w-5 h-5" />,
      text: "Premium Content"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            {/* Header Section */}
            <div className="px-8 sm:px-12 pt-12 pb-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-6"
              >
                <span className="text-orange-600 font-medium text-sm">Limited Time Offer</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              >
                Ready to Transform Your Career?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Join industry leaders and career changers at HireGround 2025. Secure your spot today and unlock exclusive networking opportunities.
              </motion.p>

              {/* Features */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-6 mb-10"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-xl"
                  >
                    <span className="text-orange-600">{feature.icon}</span>
                    <span className="font-medium text-sm">{feature.text}</span>
                  </div>
                ))}
              </motion.div> */}
            </div>

            {/* CTA Buttons Section */}
            <div className="px-8 sm:px-12 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* Primary CTA */}
                <motion.a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
                >
                  <span className="flex items-center gap-3">
                    Get Your Ticket
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.a>

                {/* Secondary CTA */}
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all duration-300 min-w-[200px]"
                  >
                    <span className="flex items-center gap-3">
                      Learn More
                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>1000+ Attendees Expected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>20+ Industry Speakers</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Cta