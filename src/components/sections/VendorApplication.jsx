import React from 'react'
import { motion } from 'framer-motion'
import { FiShoppingBag, FiTrendingUp, FiUsers, FiCheckCircle, FiArrowRight, FiDollarSign, FiMapPin, FiStar } from 'react-icons/fi'

const VendorApplication = () => {
  const benefits = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Direct Customer Access",
      description: "Connect with 1,000+ attendees onsite and reach 10,000+ virtually nationwide."
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Boost Sales & Visibility",
      description: "Showcase your products and services to a highly engaged, career-focused audience."
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: "Revenue Opportunity",
      description: "Generate sales during and after the event through direct engagement with attendees."
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Prime Location",
      description: "Secure a strategic booth position at one of Ilorin's most anticipated career events."
    }
  ]

  const features = [
    "Dedicated vendor booth space",
    "Prominent display area for products",
    "Access to attendee foot traffic",
    "Brand exposure in event promotions",
    "Networking with other vendors",
    "On-site sales opportunities"
  ]

  const stats = [
    { number: "500+", label: "On-Site Attendees" },
    { number: "10,000+", label: "Virtual Reach" },
    { number: "All Day", label: "Vendor Access" }
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            duration: 28,
            repeat: 0,
            ease: "linear"
          }}
          className="hidden absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{ 
            duration: 32,
            repeat: 0,
            ease: "linear"
          }}
          className="hidden absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ display: 'none' }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          {/* Badge */}

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-gray-900">Showcase Your </span>
            
              Business
            
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-8"
          >
            Join us as a vendor at HireGround 2025 and connect with thousands of potential customers while supporting career development.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://selar.com/1717s75715"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-bold text-white bg-orange-600 rounded-md hover:shadow-orange-500/50 transition-all duration-300"
            >
              <span className="mr-3">Apply as Vendor</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/80 border border-orange-100 rounded-lg p-6 transition-all duration-300 hover:bg-white hover:border-orange-300"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300">
                  <div className="text-orange-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/90 border border-gray-200 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Features List */}
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <FiStar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Vendor Package
                  </h3>
                </div>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <FiCheckCircle className="w-6 h-6 text-night mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-base sm:text-lg">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-mist border-l border-gray-200 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <p className="text-ember-deep font-semibold mb-3">Limited Vendor Spots</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Ready to Join?
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                    Secure your vendor booth at HireGround 2025 and be part of Ilorin's premier career development event.
                  </p>
                </div>

                <motion.a
                  href="https://selar.com/1717s75715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-600 rounded-md transition-all duration-300"
                >
                  <span className="mr-3">Apply Now</span>
                </motion.a>

                <p className="text-gray-600 text-sm text-center mt-4">
                  Questions? Email us at{' '}
                  <a href="mailto:hireground@thelightutors.com" className="text-orange-600 hover:text-orange-700 underline">
                    hireground@thelightutors.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-sm sm:text-base">
            Perfect for food vendors, tech companies, educational services, fashion brands, and more!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default VendorApplication
