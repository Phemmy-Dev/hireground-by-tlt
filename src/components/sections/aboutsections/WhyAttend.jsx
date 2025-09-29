import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiUsers, 
  FiTrendingUp, 
  FiBriefcase, 
  FiAward, 
  FiGlobe, 
  FiBook,
  FiHeart,
  FiZap,
  FiTarget,
  FiArrowRight
} from 'react-icons/fi'

const WhyAttend = () => {
  const reasons = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Network with 1000+ Professionals",
      description: "Connect with industry leaders, entrepreneurs, and like-minded individuals who can accelerate your career growth.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      stats: "1000+ Attendees"
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: "Access Exclusive Job Opportunities",
      description: "Get first access to job openings from 20+ companies actively recruiting at the event.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      stats: "20+ Companies"
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: "Learn from Industry Experts",
      description: "Attend masterclasses and workshops led by 50+ top professionals sharing their success strategies.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      stats: "20+ Expert Speakers"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Accelerate Your Career Growth",
      description: "Gain insights and strategies that can fast-track your professional development by years.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      stats: "Years of Growth"
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Discover Global Opportunities",
      description: "Explore international career paths and remote work opportunities with multinational companies.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      stats: "Global Reach"
    },
    // {
    //   icon: <FiAward className="w-8 h-8" />,
    //   title: "Get Industry Recognition",
    //   description: "Showcase your achievements and get recognized through our awards and recognition programs.",
    //   color: "from-yellow-500 to-yellow-600",
    //   bgColor: "bg-yellow-50",
    //   borderColor: "border-yellow-200",
    //   stats: "Recognition Awards"
    // }
  ]

  const testimonials = [
    {
      quote: "HireGround opened doors I never knew existed. The connections I made led to my dream job within 3 months!",
      author: "Sarah Adebayo",
      role: "Software Engineer at TechCorp",
      avatar: null // Placeholder for avatar
    },
    {
      quote: "The workshops were incredibly practical. I implemented what I learned and got promoted within 6 months.",
      author: "Michael Okonkwo", 
      role: "Marketing Manager at GlobalBrand",
      avatar: null // Placeholder for avatar
    },
    {
      quote: "Best investment in my career. The networking alone was worth 10x the ticket price.",
      author: "Fatima Ibrahim",
      role: "Data Scientist at FinTech Startup",
      avatar: null // Placeholder for avatar
    }
  ]

  const AvatarPlaceholder = ({ name }) => (
    <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
      <span className="text-gray-600 font-semibold text-sm">
        {name.split(' ').map(n => n[0]).join('')}
      </span>
    </div>
  )

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
              <FiZap className="w-4 h-4 text-orange-600 mr-2" />
              <span className="text-orange-600 font-medium text-sm uppercase tracking-wide">Why Attend</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Why <span className="text-orange-600">HireGround</span> is a 
              <br className="hidden sm:block" />
              Game-Changer for Your Career
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of ambitious professionals who are transforming their careers through meaningful connections, expert insights, and exclusive opportunities.
            </p>
          </motion.div>

          {/* Main Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${reason.borderColor} group hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${reason.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {reason.description}
                </p>

                {/* Stats */}
                <div className={`inline-flex items-center px-3 py-1 ${reason.bgColor} rounded-full`}>
                  <span className="text-sm font-semibold text-gray-700">{reason.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Interactive Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
                <FiTarget className="w-4 h-4 mr-2" />
                <span className="font-medium text-sm uppercase tracking-wide">Limited Time</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Don't Miss Out on the Career Event of the Year
              </h3>
              
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Thousands of professionals are already registered. Secure your spot now and join Nigeria's largest career transformation event.
              </p>

              {/* Urgency Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">Early Bird</div>
                  <div className="text-sm opacity-80">Save 30% on tickets</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">Limited Seats</div>
                  <div className="text-sm opacity-80">Only 1000 spots available</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg text-lg"
                >
                  Tickets Coming Soon
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
                {/* <motion.a
                  href="/register"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg text-lg"
                >
                  Get Your Ticket Now
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </motion.a> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyAttend