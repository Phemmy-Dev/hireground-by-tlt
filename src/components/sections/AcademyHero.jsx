import React from 'react'
import { motion } from 'framer-motion'
import { HiSparkles, HiAcademicCap, HiClock, HiGlobe } from 'react-icons/hi'
import academyherobg from '../../assets/images/academyherobg.jpeg'

const AcademyHero = () => {
  const stats = [
    { icon: HiClock, value: '6 Weeks', label: 'Program Duration' },
    { icon: HiAcademicCap, value: '50', label: 'Participants' },
    { icon: HiGlobe, value: '100%', label: 'Virtual' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={academyherobg}
          alt="HireGround Academy Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Lighter Overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        {/* Gradient Orbs - reduced opacity */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"
        />

        {/* Grid Pattern - slightly more subtle */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-orange-400/50 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Content Container - added pt-24 for navbar spacing, reduced py */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">

          {/* Applications Open Badge - reduced margin bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-3"
          >
            <span className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-green-500/25 to-emerald-500/25 backdrop-blur-md border border-green-400/50 rounded-full shadow-lg shadow-green-500/20">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3"
              />
              <span className="text-green-300 font-semibold text-sm sm:text-base tracking-wide">
                APPLICATIONS NOW OPEN – COHORT 1 IS FREE
              </span>
            </span>
          </motion.div>

          {/* Presents Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-2"
          >
            <span className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 font-medium text-sm">
              <HiSparkles className="w-4 h-4 mr-2 text-orange-400" />
              The Light Tutors Presents
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
              HireGround
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Academy
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6"
          >
            A <span className="text-orange-400 font-semibold">6-week employability</span> and skills development program designed to prepare early-career professionals and graduates for the job market.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            {/* Primary CTA */}
            <a
              href="https://forms.gle/pGwPAfz6VLy26mtZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold text-white overflow-hidden rounded-full shadow-2xl shadow-orange-500/30 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/50"
            >
              {/* Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>

              {/* Button Content */}
              <span className="relative flex items-center">
                <HiAcademicCap className="w-6 h-6 mr-3" />
                <span>Apply Now – It's Free</span>
                <svg
                  className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#learn-more"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <span>Learn More</span>
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
              >
                <stat.icon className="w-6 h-6 text-orange-400" />
                <div className="text-left">
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-xs mb-2 font-medium">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AcademyHero
