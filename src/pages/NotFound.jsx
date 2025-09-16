import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiHome, 
  FiArrowLeft, 
  FiSearch, 
  FiMail, 
  FiRotateCcw,
  FiMapPin,
  FiCompass,
  FiStar,
  FiHeart
} from 'react-icons/fi'

const NotFound = () => {
  const [floatingElements, setFloatingElements] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  // Generate floating elements
  useEffect(() => {
    const elements = []
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        icon: [FiMapPin, FiCompass, FiStar, FiHeart][Math.floor(Math.random() * 4)]
      })
    }
    setFloatingElements(elements)
  }, [])

  const quickLinks = [
    { name: 'Home', path: '/', icon: <FiHome className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <FiCompass className="w-4 h-4" /> },
    { name: 'Speakers', path: '/speakers', icon: <FiStar className="w-4 h-4" /> },
    { name: 'Sponsors', path: '/sponsors', icon: <FiHeart className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <FiMail className="w-4 h-4" /> }
  ]

  const funMessages = [
    "Looks like you've wandered off the career path! 🚀",
    "This page is taking a coffee break ☕",
    "404: Page not found, but opportunities are everywhere! 💼",
    "Oops! Even the best navigators get lost sometimes 🧭",
    "This page is networking at another event 🤝"
  ]

  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % funMessages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => {
          const IconComponent = element.icon
          return (
            <motion.div
              key={element.id}
              className="absolute text-orange-200/30"
              style={{ left: `${element.x}%`, top: `${element.y}%` }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <IconComponent className="w-6 h-6" />
            </motion.div>
          )
        })}
        
        {/* Large Decorative Shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main 404 Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="relative">
              {/* Large 404 Text */}
              <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text leading-none">
                404
              </h1>
              
              {/* Animated Elements Around 404 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 border-4 border-orange-300 rounded-full opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 border-4 border-red-300 rounded-full opacity-60"
              />
              
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-1/4 text-orange-400"
              >
                <FiSearch className="w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-1/4 text-red-400"
              >
                <FiCompass className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>

          {/* Dynamic Fun Messages */}
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {funMessages[currentMessage]}
            </p>
          </motion.div>


          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FiHome className="w-5 h-5 mr-3" />
                <span>Take Me Home</span>
              </motion.button>
            </Link>
            
            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:border-orange-300 hover:text-orange-600 transition-all duration-300"
            >
              <FiArrowLeft className="w-5 h-5 mr-3" />
              <span>Go Back</span>
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Or explore these popular pages:
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <Link key={index} to={link.path}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-700 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-all duration-300"
                  >
                    {link.icon}
                    <span className="font-medium">{link.name}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>


          {/* Fun Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 text-sm">
              Remember: Every career journey has its detours. 
              <span className="text-orange-600 font-medium"> Let's get you back on track! </span>
              ✨
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default NotFound
