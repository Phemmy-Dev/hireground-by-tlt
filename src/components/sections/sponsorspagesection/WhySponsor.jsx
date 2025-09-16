import React from 'react'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiUsers, FiGlobe, FiHeart, FiTarget, FiAward, FiZap, FiStar } from 'react-icons/fi'

const WhySponsor = () => {
  // Main value propositions with compelling data
  const mainReasons = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Reach 10,000+ Professionals",
      description: "Connect with Africa's most ambitious professionals, from emerging talent to C-suite executives, all actively seeking career transformation.",
      highlight: "10,000+",
      subtext: "Expected Attendees"
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Pan-African Network",
      description: "Expand your reach across 30+ African countries with professionals who are driving economic growth and innovation across the continent.",
      highlight: "30+",
      subtext: "Countries Represented"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Premium Brand Positioning",
      description: "Position your brand as a thought leader in Africa's professional development space with our engaged, high-intent audience.",
      highlight: "Premium",
      subtext: "Brand Positioning"
    }
  ]

  // Secondary benefits in a more creative layout
  const additionalBenefits = [
    { icon: <FiTarget />, text: "Direct access to top talent for recruitment" },
    { icon: <FiZap />, text: "Instant brand recognition in professional circles" },
    { icon: <FiAward />, text: "Association with Africa's premier career event" },
    { icon: <FiStar />, text: "Networking with industry leaders and innovators" },
    { icon: <FiHeart />, text: "Social impact through career transformation support" },
    { icon: <FiGlobe />, text: "Multi-channel exposure across digital platforms" }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with compelling hook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-6">
            Why Partner With Us?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Brand. <span className="text-orange-600">Their Future.</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-semibold">
              Infinite Possibilities.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the movement that's reshaping Africa's professional landscape. 
            Your sponsorship doesn't just support an event—it fuels careers, builds futures, and creates lasting impact.
          </p>
        </motion.div>

        {/* Main Value Propositions - Asymmetric Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {mainReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card with unique styling */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Icon and highlight number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    {reason.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-600 leading-none">
                      {reason.highlight}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {reason.subtext}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative Section - "What You Get" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 grid-rows-6 h-full gap-4">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="bg-orange-300 rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                What You <span className="text-orange-400">Actually Get</span>
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Beyond the numbers, here's the real value of partnering with HireGround
              </p>
            </div>

            {/* Benefits in a creative hexagonal-inspired layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {additionalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <p className="text-white font-medium leading-relaxed">
                    {benefit.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Call to action in the dark section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-center mt-12 pt-12 border-t border-white/20"
            >
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Make Your Mark?
              </h4>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't just sponsor an event. Invest in Africa's future and position your brand 
                at the forefront of the continent's professional transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:partnerships@hireground.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl shadow-xl transition-all duration-300"
                >
                  Let's Partner Together
                </motion.a>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Download Sponsorship Deck
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final compelling statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16 lg:mt-20"
        >
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 italic max-w-4xl mx-auto leading-relaxed">
            "When you sponsor HireGround, you're not just reaching an audience—
            <span className="text-orange-600"> you're shaping the future leaders of Africa.</span>"
          </blockquote>
        </motion.div>

      </div>
    </section>
  )
}

export default WhySponsor