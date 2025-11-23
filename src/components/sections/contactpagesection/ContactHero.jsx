import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

const ContactHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-28">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50">
        {/* Decorative geometric shapes */}
        <div className="absolute inset-0 opacity-20 sm:opacity-30">
          <div className="absolute top-20 left-5 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-red-200 to-orange-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-100 to-red-100 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-3 sm:opacity-5">
          <div className="grid grid-cols-8 sm:grid-cols-12 grid-rows-6 sm:grid-rows-8 h-full gap-2 sm:gap-4">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="bg-orange-400 rounded-sm hidden sm:block"></div>
            ))}
            {[...Array(48)].map((_, i) => (
              <div key={i + 48} className="bg-orange-400 rounded-sm block sm:hidden"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left side - Main content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                Get In Touch
              </div>

              {/* Main headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
                Let's Start a
                <br />
                <span className="text-orange-600">Conversation</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Have questions about HireGround? Want to partner with us? 
                Looking to attend or speak at our event? We're here to help make it happen.
              </p>

              {/* Quick contact info */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-3"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Email us at</p>
                    <a href="mailto:hireground@thelightutors.com" className="text-sm sm:text-base text-gray-900 font-semibold hover:text-orange-600 transition-colors duration-300 truncate block">
                      hireground@thelightutors.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center justify-center lg:justify-start gap-3"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiClock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Response time</p>
                    <p className="text-sm sm:text-base text-gray-900 font-semibold">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl shadow-2xl transition-all duration-300 text-base sm:text-lg group"
              >
                <span>Send us a message</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Right side - Visual element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main visual container */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-gray-100">
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-15"></div>
                
                {/* Contact stats/info */}
                <div className="relative space-y-4 sm:space-y-6">
                  <div className="text-center pb-4 sm:pb-6 border-b border-gray-100">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">We're Here to Help</h3>
                    <p className="text-sm sm:text-base text-gray-600">Choose the best way to reach us</p>
                  </div>

                  {/* Contact options */}
                  <div className="space-y-3 sm:space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">General Inquiries</p>
                        <p className="text-sm sm:text-base text-gray-900 font-semibold truncate">hireground@thelightutors.com</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <FiPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">Partnerships</p>
                        <p className="text-sm sm:text-base text-gray-900 font-semibold truncate">joshua@thelightutors.com</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">Event Location</p>
                        <p className="text-sm sm:text-base text-gray-900 font-semibold">Ilorin, Kwara State, Nigeria</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-20 w-4 h-4 bg-orange-400 rounded-full hidden xl:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-20 w-3 h-3 bg-red-400 rounded-full hidden xl:block"
      />
    </section>
  )
}

export default ContactHero
