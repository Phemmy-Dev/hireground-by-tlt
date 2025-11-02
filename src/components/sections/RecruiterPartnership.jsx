import React from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiTrendingUp, FiAward, FiCheckCircle, FiArrowRight, FiBriefcase, FiStar, FiTarget } from 'react-icons/fi'

const RecruiterPartnership = () => {
  const benefits = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Access Top Talent",
      description: "Connect with 1,000+ skilled, job-ready professionals eager to join your team."
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Direct Engagement",
      description: "Interview candidates on-site and build relationships with emerging talent."
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Brand Visibility",
      description: "Showcase your company culture and opportunities to a diverse talent pool."
    },
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Pre-Screened Candidates",
      description: "Meet attendees who have been equipped with career-ready skills and insights."
    }
  ]

  const features = [
    "Dedicated recruitment booth space",
    "Access to attendee resumes database",
    "On-site interview facilities",
    "Company profile in event materials",
    "Networking with industry leaders",
    "Priority scheduling for candidate meetings"
  ]

  const stats = [
    { number: "1,000+", label: "Job Seekers" },
    { number: "50+", label: "Industries Represented" },
    { number: "100%", label: "Career-Focused Attendees" }
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 mb-8"
          >
            <FiTarget className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-200 font-medium text-sm sm:text-base uppercase tracking-wide">
              For Recruiters & Employers
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Recruit the </span>
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Best Talent
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Partner with HireGround to discover exceptional talent, build your team, and shape the future workforce of Nigeria.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://forms.gle/cLAcweRz29GtRxcS7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-bold text-gray-900 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              <span className="mr-3">Apply to Recruit</span>
              <FiArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-orange-500/30 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-orange-400">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Features List */}
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                    <FiStar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    What's Included
                  </h3>
                </div>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <FiCheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-base sm:text-lg">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-l border-white/10 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full mb-4">
                    <span className="text-orange-300 font-semibold text-sm uppercase">Limited Spots Available</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Ready to Find Your Next Hire?
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                    Don't miss this opportunity to connect with Nigeria's top emerging talent. Secure your recruitment partnership today.
                  </p>
                </div>

                <motion.a
                  href="https://forms.gle/cLAcweRz29GtRxcS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span className="mr-3">Submit Application</span>
                  <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>

                <p className="text-gray-400 text-sm text-center mt-4">
                  Questions? Email us at{' '}
                  <a href="mailto:hireground@thelightutors.com" className="text-orange-400 hover:text-orange-300 underline">
                    hireground@thelightutors.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            Join leading companies already partnering with HireGround to build exceptional teams
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default RecruiterPartnership
