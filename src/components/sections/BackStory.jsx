import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles, HiLightBulb, HiTrendingUp, HiUsers, HiPhotograph } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import hiregroundimg from "../../assets/images/hireground.jpg"

const BackStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ff7300 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full border border-orange-200 mb-8"
          >
            <HiSparkles className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-800 font-medium text-sm sm:text-base">
              Our Journey
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            <span className="text-gray-900">The Story Behind</span>
            <br />
            <span 
              className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
              style={{ color: '#ff7300' }}
            >
              HireGround
            </span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Story Text Section */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-orange-100/50"
            >
              <div className="space-y-8">
                {/* Opening Quote */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <p className="text-2xl sm:text-3xl lg:text-3xl text-gray-800 leading-relaxed font-bold italic">
                    From One Conversation to 10,000 Careers"
                  </p>
                </div>
                
                {/* Story Content */}
                <div className="space-y-6">
                  <p className="text-lg sm:text-md text-gray-700 leading-relaxed">
                    It began with a single encounter, a young lady who thought she had ruined her interview because she didn't ask a single question. That moment revealed something bigger: countless young Nigerians are stepping into interviews unprepared, not because they lack talent, but because they've never been taught how to show up.
                  </p>
                  
                  <p className="text-lg sm:text-md text-gray-700 leading-relaxed">
                    At The Light Tutors, we've seen it all, candidates logging in from noisy buses, interviews taken in pyjamas, some even joining from a football pitch. It's not a lack of potential. It's a lack of preparation.
                  </p>
                  
                  <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-500">
                    <p className="text-xl font-bold text-orange-800 mb-2">
                      That's why we created HireGround.
                    </p>
                  </div>

                  <p className="text-lg sm:text-md text-gray-700 leading-relaxed">
                    What started as a small training idea has grown into a nationwide movement — a Career Fair designed to empower over 10,000 young Nigerians with the skills they need to land jobs and thrive at work:
                  </p>

                  {/* Skills List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    {[
                      "Interview etiquette",
                      "CV & cover letter writing", 
                      "Workplace skills",
                      "Career readiness"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 border border-orange-200 shadow-sm">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
                    <p className="text-xl font-bold mb-2">This is more than an event. It's a launchpad.</p>
                    <div className="text-2xl font-bold">🚀 HireGround 2025</div>
                    <div className="text-lg">Ready. Set. Your Career Starts Here.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image and Highlight */}
          <div className="space-y-8 lg:space-y-10">
            {/* Featured Image Section */}
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {/* Image Container - Using actual hireground image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={hiregroundimg}
                    alt="HireGround Event - Career transformation in action"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay with event info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        HireGround in Action
                      </h3>
                      <p className="text-sm sm:text-base opacity-90">
                        Empowering careers, transforming futures
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative element */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-2xl opacity-40"></div>
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-orange-200 to-red-200 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            {/* Highlight Card - "BIGGER, BOLDER, BEYOND BOUNDARIES" */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div 
                className="relative overflow-hidden rounded-3xl p-8 lg:p-10 shadow-2xl"
                style={{ 
                  background: `linear-gradient(135deg, #ff7300 0%, #e65100 50%, #d84315 100%)`,
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-6 right-6">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <HiLightBulb className="w-6 h-6 sm:w-8 sm:h-8 text-white/30" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                        READY, SET,
                      </h3>
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                          YOUR CAREER STARTS HERE
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {[
                      { icon: HiUsers, text: "Gain Real Employability Skills." },
                      { icon: HiLightBulb, text: "Meet Top Employers and Recruiters." },
                      { icon: HiTrendingUp, text: "Unlock Career Opportunities." }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                        className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-xl p-4"
                      >
                        <feature.icon className="w-6 h-6 text-white flex-shrink-0" />
                        <span className="text-white font-medium text-base">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-orange-600 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Learn More About HireGround
                  </motion.button>
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center p-6 lg:p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-3">10,000+</div>
              <div className="text-lg text-gray-700 font-semibold">Young Nigerians</div>
              <div className="text-sm text-gray-500 mt-1">To Be Empowered</div>
            </div>
            <div className="text-center p-6 lg:p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-3">6h</div>
              <div className="text-lg text-gray-700 font-semibold">Intensive Training</div>
              <div className="text-sm text-gray-500 mt-1">Skills & Networking</div>
            </div>
            <div className="text-center p-6 lg:p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-3">1</div>
              <div className="text-lg text-gray-700 font-semibold">Movement</div>
              <div className="text-sm text-gray-500 mt-1">Nationwide Impact</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 lg:mt-32 text-center"
        >
          <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-orange-100">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Join the Movement
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              This isn't just another career fair. It's a movement to ensure no young Nigerian 
              walks into an interview unprepared or leaves university without the skills 
              employers demand. Together, we're building the future workforce Nigeria deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-orange-600 font-semibold text-lg">Ready to transform your future?</span>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: '#ff7300' }}
                >
                  Tickets Coming Soon
                </motion.button>
              </Link>
              {/* <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: '#ff7300' }}
                >
                  Get Your Tickets Now
                </motion.button>
              </Link> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BackStory;