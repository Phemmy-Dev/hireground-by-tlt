import React from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiTrendingUp, FiAward, FiGlobe, FiArrowRight, FiPlay } from 'react-icons/fi'
import hiregroundimg from '../../../assets/images/hireground2.jpg'

const AboutHireground = () => {
  // Placeholder for main about image - you can replace this
  const aboutImage = hiregroundimg // Add your image import here later

  const ImagePlaceholder = ({ className, label }) => (
    <div className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-8 transition-all duration-300 hover:border-orange-300 hover:from-orange-50 hover:to-orange-100`}>
      <div className="w-16 h-16 mb-4 text-gray-400">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-gray-600 font-medium text-center">{label}</span>
    </div>
  )

  const features = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Community Building",
      description: "Connect with like-minded professionals, industry leaders, and career changers in a supportive environment."
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Skill Development",
      description: "Access cutting-edge workshops, masterclasses, and training sessions to stay ahead in your career."
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Industry Recognition",
      description: "Get recognized for your achievements and contributions to your field through our awards and recognition programs."
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "Discover career opportunities not just in Nigeria, but across Africa and internationally."
    }
  ]

  const stats = [
    { number: "1000+", label: "Expected Attendees" },
    { number: "10+", label: "Industry Speakers" },
    { number: "20+", label: "Companies Participating" },
    { number: "2+", label: "Workshop Sessions" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-6">
                <span className="text-orange-600 font-medium text-sm uppercase tracking-wide">The Story</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                What is <span className="text-orange-600">HireGround?</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  HireGround is Ilorin's premier career transformation event, designed to bridge the gap between talent and opportunity. Born from the vision of creating a platform where career dreams become reality, we bring together industry leaders, job seekers, career changers, and entrepreneurs under one roof.
                </p>
                
                <p>
                  In today's rapidly evolving job market, traditional career paths are being redefined. HireGround serves as your compass, providing direction, tools, and connections needed to navigate this new landscape successfully.
                </p>
                
                <p>
                  More than just an event, HireGround is a movement that believes every individual deserves access to meaningful career opportunities, regardless of their background or current circumstances.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.a
                  href="https://selar.com/3f604cs136"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Register Now
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
                {/* <motion.a
                  href="/register"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Your Ticket
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </motion.a> */}
                
                {/* Commented out intro video btn */}
                {/* <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all duration-300"
                >
                  <FiPlay className="mr-2 w-5 h-5" />
                  Watch Introduction
                </motion.button> */}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {aboutImage ? (
                <img
                  src={aboutImage}
                  alt="HireGround Event"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
                />
              ) : (
                <ImagePlaceholder
                  className="w-full h-96 lg:h-[500px]"
                  label="Main HireGround Event Image"
                />
              )}
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2025</div>
                  <div className="text-sm text-gray-600">Inaugural Year</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes HireGround Special?
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've designed every aspect of HireGround to maximize your career growth potential and create lasting professional relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-200"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                HireGround by the Numbers
              </h3>
              <p className="text-lg text-gray-600">
                Join thousands of professionals in this career transformation event
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base leading-tight px-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Don't let another opportunity pass you by. Join HireGround 2025 and take the first step toward your dream career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://selar.com/3f604cs136"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
                >
                  Register Now
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/speakers"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  Meet Our Speakers
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHireground