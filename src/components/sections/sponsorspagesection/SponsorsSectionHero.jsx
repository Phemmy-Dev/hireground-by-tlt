import React from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiCalendar, FiMapPin, FiTrendingUp, FiStar, FiArrowRight } from 'react-icons/fi'
import sponsorshero from '../../../assets/images/sponsorshero.jpg'

const SponsorsSectionHero = () => {
  // Placeholder for background image - replace with your image import
  const heroBackgroundImage = sponsorshero

  // Background placeholder component
  const BackgroundPlaceholder = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-50 to-orange-200">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 text-orange-300">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-orange-400 font-medium">Background Image Placeholder</p>
        </div>
      </div>
    </div>
  )

  // Event statistics for credibility
  const eventStats = [
    { icon: <FiUsers className="w-5 h-5" />, number: "1000+", label: "Expected Attendees" },
    { icon: <FiCalendar className="w-5 h-5" />, number: "2", label: "Days of Networking" },
    { icon: <FiTrendingUp className="w-5 h-5" />, number: "50+", label: "Industry Leaders" },
    { icon: <FiStar className="w-5 h-5" />, number: "100+", label: "Companies Participating" }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28">
      {/* Background Image or Placeholder */}
      <div className="absolute inset-0">
        {heroBackgroundImage ? (
          <img
            src={heroBackgroundImage}
            alt="HireGround Sponsors Background"
            className="w-full h-full object-cover"
          />
        ) : (
          <BackgroundPlaceholder />
        )}
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full mb-6"
          >
            <span className="text-orange-300 font-medium text-sm sm:text-base">Partnership Opportunities</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-4xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Partner with <span className="text-orange-400">HireGround</span>
            <br />
            <span className="text-xl sm:text-3xl lg:text-3xl xl:text-5xl font-semibold text-gray-200">
              Shape Nigeria's Future
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Join Kwara's career transformation event and connect with thousands of professionals, 
            industry leaders, and emerging talent while showcasing your brand to a highly engaged audience.
          </motion.p>

          {/* Event Stats Grid */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10"
          >
            {eventStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-2 text-orange-400">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 text-sm sm:text-base"
          >
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-200">Brand Visibility</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-200">Lead Generation</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-gray-200">Talent Acquisition</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-gray-200">Industry Networking</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl shadow-2xl transition-all duration-300 text-lg"
            >
              <span>Become a Sponsor</span>
              <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 text-lg backdrop-blur-sm"
            >
              <span>View Packages</span>
              <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 pt-8 border-t border-white/20"
          >
            <p className="text-gray-300 text-sm sm:text-base">
              For partnership inquiries: 
              <a 
                href="mailto:hireground@thelightutors.com" 
                className="text-orange-400 hover:text-orange-300 ml-2 font-semibold underline"
              >
                hireground@thelightutors.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-orange-400/30 rounded-full hidden lg:block"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 border border-white/10 rounded-full hidden xl:block"></div>
    </section>
  )
}

export default SponsorsSectionHero