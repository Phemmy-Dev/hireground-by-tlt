import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiMail, FiPhone } from 'react-icons/fi'
import JoshuaImage from '../assets/images/organisingteam/Joshua.jpg'
import BukunmiImage from '../assets/images/organisingteam/Oluwabukunmi.jpg'

const OrganizingTeam = () => {
  // Team members data - easily customizable
  const teamMembers = [
    {
      id: 1,
      name: "Joshua Oroge ",
      role: "HireGround Event Director",
      image: JoshuaImage,
      linkedin: "#",
      twitter: "#",
      email: "adebayo@hireground.com"
    },
    {
      id: 2,
      name: "Oluwabukunmi Olaopa",
      role: "HireGround Co-organizer",
      image: BukunmiImage,
      linkedin: "#",
      twitter: "#",
      email: "fatima@hireground.com"
    },
    {
      id: 3,
      name: "Chinedu Okafor",
      role: "Head, Partnerships & Sponsors",
      image: null, // Add your image import here
      linkedin: "#",
      twitter: "#",
      email: "chinedu@hireground.com"
    },
    {
      id: 4,
      name: "Aisha Mohammed",
      role: "Head, Content & Speakers",
      image: null, // Add your image import here
      linkedin: "#",
      twitter: "#",
      email: "aisha@hireground.com"
    },
    {
      id: 5,
      name: "Olumide Adebisi",
      role: "Head, Technology & Innovation",
      image: null, // Add your image import here
      linkedin: "#",
      twitter: "#",
      email: "olumide@hireground.com"
    },
    {
      id: 6,
      name: "Kemi Adeleke",
      role: "Head, Community Relations",
      image: null, // Add your image import here
      linkedin: "#",
      twitter: "#",
      email: "kemi@hireground.com"
    }
  ]

  // Professional placeholder component
  const TeamMemberPlaceholder = ({ name }) => {
    const initials = name.split(' ').map(n => n[0]).join('')
    const colors = [
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600',
      'from-green-400 to-green-600',
      'from-orange-400 to-orange-600',
      'from-red-400 to-red-600',
      'from-indigo-400 to-indigo-600'
    ]
    const colorIndex = name.length % colors.length
    
    return (
      <div className={`w-full h-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center`}>
        <span className="text-white font-bold text-4xl">{initials}</span>
      </div>
    )
  }

  // Smart image component that handles different aspect ratios
  const TeamMemberImage = ({ src, alt, name }) => {
    const [imageLoaded, setImageLoaded] = React.useState(false)
    const [imageError, setImageError] = React.useState(false)

    if (!src || imageError) {
      return <TeamMemberPlaceholder name={name} />
    }

    return (
      <div className="w-full h-full relative bg-gray-100">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            objectFit: 'cover',
            objectPosition: 'center 20%', // Focus on upper portion for better face framing
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    )
  }

  return (
    <section className="py-20 bg-white">
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
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-6">
              <span className="text-orange-600 font-medium text-sm uppercase tracking-wide">Our Team</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Meet The <span className="text-orange-600">Organizing</span> Team
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              HireGround is organized and run by a dedicated team of professionals who are passionate about career transformation and their potential to make a difference in people's lives.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-orange-200 hover:-translate-y-1">
                  
                  {/* Smart Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gray-50">
                    <TeamMemberImage 
                      src={member.image}
                      alt={member.name}
                      name={member.name}
                    />
                    
                    {/* Professional Social Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
                        >
                          <FiLinkedin className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg"
                        >
                          <FiTwitter className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={`mailto:${member.email}`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg"
                        >
                          <FiMail className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {member.name}
                    </h3>
                    
                    <div className="text-orange-600 font-medium text-sm leading-relaxed">
                      {member.role}
                    </div>
                    
                    {/* Professional Divider */}
                    <div className="w-12 h-0.5 bg-orange-200 mx-auto mt-4"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-3xl p-8 md:p-12 text-center border border-orange-100"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Want to Join Our Team?
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're always looking for passionate individuals who share our vision of transforming careers and empowering professionals across Africa. Be part of something bigger.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/volunteer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg"
                >
                  Become a Volunteer
                </motion.a>
                
                <motion.a
                  href="/careers"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white border-2 border-orange-300 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300"
                >
                  View Open Positions
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Have Questions for Our Team?
              </h4>
              
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our organizing team is here to help. Whether you have questions about speaking opportunities, partnerships, or general inquiries, we'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:team@hireground.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  <FiMail className="mr-2 w-4 h-4" />
                  team@hireground.com
                </motion.a>
                
                <motion.a
                  href="tel:+2341234567890"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  <FiPhone className="mr-2 w-4 h-4" />
                  +234 (0) 123 456 7890
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OrganizingTeam