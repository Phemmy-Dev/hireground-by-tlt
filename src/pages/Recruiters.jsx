import React from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiTrendingUp, FiAward, FiCheckCircle, FiArrowRight, FiBriefcase, FiStar, FiTarget, FiCalendar, FiMapPin, FiClock } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CountdownModal from '../components/CountdownModal'
import { useCountdownModal } from '../hooks/useCountdownModal'

const Recruiters = () => {
  const { showCountdownModal, handleCloseModal } = useCountdownModal()

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
    },
    {
      icon: <FiStar className="w-6 h-6" />,
      title: "Networking Opportunities",
      description: "Build connections with other industry leaders and business partners."
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Targeted Recruitment",
      description: "Focus your efforts on candidates that match your specific requirements."
    }
  ]

  const features = [
    "Dedicated recruitment booth space",
    "Access to attendee resumes database",
    "On-site interview facilities",
    "Company profile in event materials",
    "Networking with industry leaders",
    "Priority scheduling for candidate meetings",
    "Promotional materials distribution",
    "Social media promotion of your company"
  ]

  const stats = [
    { number: "1,000+", label: "Job Seekers Onsite", icon: <FiUsers className="w-6 h-6" /> },
    { number: "50+", label: "Industries Represented", icon: <FiBriefcase className="w-6 h-6" /> },
    { number: "100%", label: "Career-Focused Attendees", icon: <FiTarget className="w-6 h-6" /> }
  ]

  const process = [
    {
      step: "01",
      title: "Submit Application",
      description: "Fill out our simple recruitment partnership application form with your company details."
    },
    {
      step: "02",
      title: "Review & Approval",
      description: "Our team reviews your application and reaches out within 48 hours."
    },
    {
      step: "03",
      title: "Confirm Partnership",
      description: "Receive your confirmation package with booth details and event access."
    },
    {
      step: "04",
      title: "Recruit Talent",
      description: "Connect with top candidates at the event and build your dream team."
    }
  ]

  const testimonials = [
    {
      quote: "HireGround gave us access to exceptional talent. We hired 5 graduates who have become key members of our team.",
      company: "Tech Startup, Lagos",
      role: "HR Director"
    },
    {
      quote: "The quality of candidates and the organization of the recruitment process exceeded our expectations.",
      company: "Financial Services Firm, Abuja",
      role: "Talent Acquisition Manager"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`transition-all duration-300 ${showCountdownModal ? 'blur-sm' : ''}`}>
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-32 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 overflow-hidden">
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
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 mb-8">
                  <FiTarget className="w-5 h-5 text-orange-400 mr-2" />
                  <span className="text-orange-200 font-medium text-sm sm:text-base uppercase tracking-wide">
                    Recruiter Partnership Program
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-white">Recruit the </span>
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Best Talent
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Partner with HireGround to discover exceptional talent, build your team, and shape the future workforce of Nigeria.
                </p>

                {/* Main CTA */}
                <motion.a
                  href="https://forms.gle/cLAcweRz29GtRxcS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-bold text-gray-900 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 mb-12"
                >
                  <span className="mr-3">Apply to Recruit</span>
                  <FiArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>

                {/* Event Info */}
                <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-5 h-5 text-orange-400" />
                    <span>December 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="w-5 h-5 text-orange-400" />
                    <span>Kwara State, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiUsers className="w-5 h-5 text-orange-400" />
                    <span>1,000+ Attendees</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                      {stat.icon}
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-4">
                  <span className="text-orange-600 font-medium text-sm uppercase tracking-wide">Why Partner With Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Recruitment Partnership <span className="text-orange-600">Benefits</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Gain exclusive access to top talent and recruitment resources that set you up for success.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-4 text-orange-600">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  How It <span className="text-orange-600">Works</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Four simple steps to becoming a recruitment partner at HireGround 2025.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features & CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
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
                        <FiClock className="w-4 h-4 text-orange-300 mr-2" />
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
                      className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 mb-6"
                    >
                      <span className="mr-3">Submit Application</span>
                      <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>

                    <p className="text-gray-400 text-sm text-center">
                      Questions? Email us at{' '}
                      <a href="mailto:hireground@thelightutors.com" className="text-orange-400 hover:text-orange-300 underline">
                        hireground@thelightutors.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Countdown Modal */}
      {showCountdownModal && (
        <CountdownModal 
          isOpen={showCountdownModal} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  )
}

export default Recruiters
