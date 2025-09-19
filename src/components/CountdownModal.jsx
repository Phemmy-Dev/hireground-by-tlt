import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCalendar, FiMapPin, FiUsers, FiStar, FiAward, FiArrowRight, FiGift } from 'react-icons/fi'

const CountdownModal = ({ isOpen, onClose }) => {
  // Set your event date here - December 4, 2025 at 9:00 AM
  const eventDate = new Date('2025-12-04T09:00:00').getTime()
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  if (!mounted) return null

  const timeUnits = [
    { value: timeLeft.days, label: 'Days', shortLabel: 'D', color: 'text-slate-800', bgColor: 'bg-white', borderColor: 'border-slate-200' },
    { value: timeLeft.hours, label: 'Hours', shortLabel: 'H', color: 'text-slate-800', bgColor: 'bg-white', borderColor: 'border-slate-200' },
    { value: timeLeft.minutes, label: 'Minutes', shortLabel: 'M', color: 'text-slate-800', bgColor: 'bg-white', borderColor: 'border-slate-200' },
    { value: timeLeft.seconds, label: 'Seconds', shortLabel: 'S', color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' }
  ]

  // Organic floating shapes
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 4 + 3,
    shape: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)]
  }))

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={onClose}
        >
          {/* Clean backdrop */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Main modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-xl sm:rounded-2xl max-w-sm sm:max-w-4xl w-full shadow-xl border border-slate-200 overflow-hidden max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Simple top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-orange-500" />
            
            {/* Clean close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200 flex items-center justify-center"
            >
              <FiX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </button>

            <div className="p-6 sm:p-8 lg:p-10">
              {/* Clean Hero Section */}
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-6">
                  <FiStar className="w-4 h-4" />
                  Event Countdown
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-3 leading-tight">
                  HIREGROUND
                </h1>
                
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px bg-slate-300 flex-1 max-w-16"></div>
                  <span className="text-xl sm:text-2xl font-semibold text-orange-600">2025</span>
                  <div className="h-px bg-slate-300 flex-1 max-w-16"></div>
                </div>

                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Africa's premier career transformation summit. Join us for networking, 
                  learning, and life-changing opportunities.
                </p>
              </div>

              {/* Clean Countdown Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {timeUnits.map((unit, index) => (
                  <div
                    key={unit.label}
                    className={`${unit.bgColor} ${unit.borderColor} border rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-200`}
                  >
                    <div className={`text-3xl sm:text-4xl font-bold ${unit.color} mb-2`}>
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="text-slate-600 font-medium text-sm">
                      <span className="hidden sm:inline">{unit.label}</span>
                      <span className="sm:hidden">{unit.shortLabel}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Event Info */}
              <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                      <FiCalendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium">Date</p>
                      <p className="text-slate-900 font-semibold">December 4, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium">Location</p>
                      <p className="text-slate-900 font-semibold">Kwara State, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                      <FiUsers className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm font-medium">Expected</p>
                      <p className="text-slate-900 font-semibold">1000+ Attendees</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean CTA Section */}
              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Reserve Your Seat
                    <FiArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onClose}
                    className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-200"
                  >
                    Learn More
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                  <FiAward className="w-4 h-4 text-orange-500" />
                  <span>Early Bird Discount Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CountdownModal
