import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock, FiTwitter, FiLinkedin, FiInstagram, FiGlobe } from 'react-icons/fi'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Us",
      primary: "bukunmi@thelightutors.com",
      description: "For general inquiries and partnerships",
      action: "mailto:bukunmi@thelightutors.com",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      primary: "+234 (0) 913 268 1049",
      secondary: "Available during business hours",
      description: "Speak directly with our team",
      action: "tel:+2349132681049",
      color: "bg-green-100 text-green-600"
    },
    // {
    //   icon: <FiMapPin className="w-6 h-6" />,
    //   title: "Visit Us",
    //   primary: "Kwara State, Nigeria",
    //   secondary: "Banquet Hall, Ilorin",
    //   description: "Event venue",
    //   action: "#",
    //   color: "bg-purple-100 text-purple-600"
    // },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Business Hours",
      primary: "Mon - Fri: 9AM - 6PM",
      secondary: "WAT (West Africa Time)",
      description: "We respond within 24 hours",
      action: "#",
      color: "bg-orange-100 text-orange-600"
    }
  ]

  const socialLinks = [
    { icon: <FiTwitter className="w-5 h-5" />, name: "Twitter", url: "#", color: "hover:text-blue-400" },
    { icon: <FiLinkedin className="w-5 h-5" />, name: "LinkedIn", url: "#", color: "hover:text-blue-600" },
    { icon: <FiInstagram className="w-5 h-5" />, name: "Instagram", url: "https://www.instagram.com/thelightutors.csr", color: "hover:text-pink-500" },
    { icon: <FiGlobe className="w-5 h-5" />, name: "Website", url: "#", color: "hover:text-orange-500" }
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Multiple Ways to <span className="text-orange-600">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Choose the communication method that works best for you. We're available through 
            various channels to ensure you can reach us easily.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center block"
            >
              <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {method.title}
              </h3>
              
              <p className="text-base sm:text-lg font-semibold text-gray-800 mb-1 break-words overflow-wrap-anywhere leading-tight">
                {method.primary}
              </p>
              
              <p className="text-sm text-gray-500 mb-3">
                {method.secondary}
              </p>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {method.description}
              </p>

              {/* Hover indicator */}
              <div className="w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </motion.a>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                <FiClock className="w-4 h-4" />
              </div>
              Office Hours
            </h3>
            
            <div className="space-y-4">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-700">{schedule.day}</span>
                  <span className="text-gray-900 font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-orange-100 rounded-xl">
              <p className="text-sm text-orange-800 font-medium">
                💡 Need urgent assistance? Email us anytime - we monitor our inbox 24/7 and will respond as quickly as possible.
              </p>
            </div>
          </motion.div>

          {/* Social Media & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-50 to-red-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Our Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stay updated with the latest news, behind-the-scenes content, and announcements 
                about HireGround on our social media channels.
              </p>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response Guarantee */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Promise to You</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <FiClock className="w-3 h-3 text-white" />
                  </div>
                  <span>24-hour response guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <FiMail className="w-3 h-3 text-white" />
                  </div>
                  <span>Personalized responses, not templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <FiPhone className="w-3 h-3 text-white" />
                  </div>
                  <span>Follow-up calls when needed</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactInfo
