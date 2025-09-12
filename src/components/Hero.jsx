import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import React from 'react'

const Hero = ({ title, text, heroImg, herobtn }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Advanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10s] ease-in-out hover:scale-110"
        />
        {/* Multiple layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2 sm:mb-2 mt-8"
          >
            <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/15 backdrop-blur-xl border border-white/30 rounded-full text-white font-medium text-sm sm:text-base shadow-2xl hover:bg-white/20 transition-all duration-300">
              <span className="mr-2 text-base">✨</span>
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                The Light Tutors Presents
              </span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-4 leading-tight sm:leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              {title}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-6 px-4 sm:px-0"
          >
            <span className="drop-shadow-md">
              {text}
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring", bounce: 0.2 }}
            className="mb-12 sm:mb-16"
          >
            <Link 
              to="/who-we-are"
              className="group relative inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold text-white overflow-hidden rounded-full shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/50"
              style={{ backgroundColor: '#ff7300' }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Button content */}
              <span className="relative flex items-center">
                <span className="mr-3">{herobtn}</span>
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-30 group-active:animate-ping bg-white transition-opacity duration-150"></div>
            </Link>
          </motion.div>

          {/* Stats or Features (Optional Enhancement) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center mb-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-300">Success Stories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-300">Expert Speakers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-300">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer hover:text-white transition-colors duration-300"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-2 font-medium">Scroll Down</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}



export default Hero