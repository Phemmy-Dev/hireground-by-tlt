import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMail, FiPhone, FiDownload, FiCheck, FiClock, FiUsers } from 'react-icons/fi'

const SponsorCta = () => {
  const [hoveredButton, setHoveredButton] = useState(null)

  // Urgency indicators
  const urgencyPoints = [
    { icon: <FiClock className="w-4 h-4" />, text: "Limited sponsorship slots available" },
    { icon: <FiUsers className="w-4 h-4" />, text: "Join 50+ confirmed industry leaders" },
    { icon: <FiCheck className="w-4 h-4" />, text: "Early bird pricing ends soon" }
  ]

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Unique background with geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-800">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 right-10 w-64 h-64 border-2 border-white rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 left-10 w-48 h-48 border border-white rounded-full"
          />
          <motion.div
            animate={{ 
              y: [-20, 20, -20]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-2xl rotate-45"
          />
        </div>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Attention-grabbing badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-white text-sm font-semibold">Partnership Opportunities Open</span>
            </div>

            {/* Compelling headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Don't Just Watch.
              <br />
              <span className="text-yellow-300">Shape History.</span>
            </h2>

            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join the brands and leaders who are already transforming Nigeria's professional landscape. 
              Your sponsorship decision today becomes tomorrow's success story.
            </p>
          </motion.div>

          {/* CTA Buttons with unique design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {/* Primary CTA - Become a Sponsor */}
            <motion.a
              href="mailto:hireground@thelightutors.com"
              onHoverStart={() => setHoveredButton('sponsor')}
              onHoverEnd={() => setHoveredButton(null)}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-10 py-5 bg-white text-orange-600 font-bold rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
            >
              {/* Button background animation */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: hoveredButton === 'sponsor' ? '0%' : '-100%' }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400"
              />
              
              <div className="relative flex items-center">
                <FiMail className="w-6 h-6 mr-3 group-hover:text-white transition-colors duration-300" />
                <span className="text-lg group-hover:text-white transition-colors duration-300">
                  Become a Sponsor
                </span>
                <FiArrowRight className="w-6 h-6 ml-3 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </motion.a>

            {/* Secondary CTA - Download Package
            <motion.button
              onHoverStart={() => setHoveredButton('download')}
              onHoverEnd={() => setHoveredButton(null)}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: hoveredButton === 'download' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white/20 rounded-2xl"
              />
              
              <div className="relative flex items-center">
                <FiDownload className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg">Download Packages</span>
                <FiArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button> */}
          </motion.div>

          {/* Final compelling statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-lg text-white/80 italic">
              "The best time to partner with HireGround was yesterday. The second best time is right now."
            </p>
          </motion.div>

        </div>
      </div>

      {/* Floating action elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="w-4 h-4 bg-yellow-300 rounded-full shadow-lg"></div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 hidden lg:block"
      >
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
      </motion.div>
    </section>
  )
}

export default SponsorCta