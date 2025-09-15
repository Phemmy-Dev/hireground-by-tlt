import React from 'react'
import { motion } from 'framer-motion'
import herobg from '../../../assets/images/herobg.jpg' // Easy to change this import

const AboutHero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Easy to change by updating the import above */}
      <div className="absolute inset-0 z-0">
        <img 
          src={herobg} 
          alt="About Hero Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Professional overlay - not too heavy */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full text-white font-medium text-sm">
              <span className="mr-2">🎯</span>
              About HireGround
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Empowering Careers,{' '}
            <span className="text-orange-400">
              Transforming Lives
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8"
          >
            HireGround is more than an event—it's a movement dedicated to bridging the gap between talent and opportunity, creating pathways for career success across Nigeria and beyond.
          </motion.p>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">2025</div>
              <div className="text-sm sm:text-base text-gray-300">Inaugural Year</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-sm sm:text-base text-gray-300">Expected Attendees</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-300">Industry Experts</div>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer hover:text-white transition-colors duration-300"
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-2 font-medium">Learn More</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutHero