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
      title: "Network with 500+ Professionals",
      description: "Connect with industry leaders, entrepreneurs, and like-minded individuals who can accelerate your career growth.",
      color: "bg-ember",
      bgColor: "bg-mist",
      borderColor: "border-line",
      stats: "500+ Attendees"
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: "Access Exclusive Job Opportunities",
      description: "Get first access to job openings from 20+ companies actively recruiting at the event.",
      color: "bg-azure",
      bgColor: "bg-mist",
      borderColor: "border-line",
      stats: "20+ Companies"
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: "Learn from Industry Experts",
      description: "Attend masterclasses and workshops led by 50+ top professionals sharing their success strategies.",
      color: "bg-kelly",
      bgColor: "bg-mist",
      borderColor: "border-line",
      stats: "20+ Expert Speakers"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Accelerate Your Career Growth",
      description: "Gain insights and strategies that can fast-track your professional development by years.",
      color: "bg-gold",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      stats: "Years of Growth"
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Discover Global Opportunities",
      description: "Explore international career paths and remote work opportunities with multinational companies.",
      color: "bg-pink",
      bgColor: "bg-mist",
      borderColor: "border-line",
      stats: "Global Reach"
    },
    // {
    //   icon: <FiAward className="w-8 h-8" />,
    //   title: "Get Industry Recognition",
    //   description: "Showcase your achievements and get recognized through our awards and recognition programs.",
    //   color: "bg-turquoise",
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
    <div className="w-12 h-12 bg-mist rounded-full flex items-center justify-center">
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
            className="mb-16"
          >
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Why HireGround is a 
              <br className="hidden sm:block" />
              Game-Changer for Your Career
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
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
                <div className={`w-16 h-16 rounded-xl ${reason.color} flex items-center justify-center text-ink mb-6`}>
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
            className="bg-orange-600 rounded-xl p-8 md:p-12 text-white text-center"
          >
            <div className="max-w-4xl mx-auto">
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Don't Miss Out on the Career Event of the Year
              </h3>
              
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Thousands of professionals are already registered. Secure your spot now and join Nigeria's largest career transformation event.
              </p>

              {/* Urgency Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">Early Bird</div>
                  <div className="text-sm opacity-80">Save 30% on tickets</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">Limited Seats</div>
                  <div className="text-sm opacity-80">Only 500 spots available</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://trankets.com/invite/hireground-kwara-career-fair-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-md hover:bg-gray-50 transition-all duration-300 text-lg"
                >
                  Register Now
                </motion.a>
                {/* <motion.a
                  href="/register"
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-md hover:bg-gray-50 transition-all duration-300 text-lg"
                >
                  Get Your Ticket Now
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