import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiTwitter, 
  FiInstagram, 
  FiFacebook,
  FiArrowUp,
  FiHeart
} from 'react-icons/fi'
import Logo from '../assets/images/logo-white.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    event: [
      { name: 'About HireGround', path: '/about' },
      { name: 'Speakers', path: '/speakers' },
      { name: 'Sponsors', path: '/sponsors' },
      { name: 'Contact Us', path: '/contact' }
    ],
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'Get Tickets', href: 'https://wa.link/7hogep', external: true },
      { name: 'Become a Sponsor', href: 'mailto:bukunmi@thelightutors.com', external: true },
      { name: 'Partnership Inquiry', href: 'mailto:bukunmi@thelightutors.com', external: true }
    ]
  }

  const socialLinks = [
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiInstagram />, href: '#', label: 'Instagram' },
    { icon: <FiFacebook />, href: '#', label: 'Facebook' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="mb-6">
                <img 
                  src={Logo} 
                  alt="HireGround Logo" 
                  className="h-12 w-auto mb-4"
                />
                <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                  Kwara's premier career transformation event. Connecting talent, empowering professionals, and shaping the future of work across the continent.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <FiMail className="w-4 h-4 text-orange-500" />
                  <a href="mailto:bukunmi@thelightutors.com" className="text-sm hover:text-orange-500 transition-colors duration-300">
                    bukunmi@thelightutors.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <FiMapPin className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">Kwara, Nigeria</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-600 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Event Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-white mb-4">Explore</h4>
                <ul className="space-y-3">
                  {footerLinks.event.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.path}
                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Quick Action Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-white mb-4">Take Action</h4>
                <ul className="space-y-3">
                  {footerLinks.quickLinks.map((link, index) => (
                    <li key={index}>
                      {link.external ? (
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link 
                          to={link.path}
                          className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-gray-400 text-sm"
              >
                <span>© {currentYear} HireGround by The Light Tutors.</span>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:text-white hover:bg-gray-700 transition-all duration-300 text-sm"
              >
                <span>Back to Top</span>
                <FiArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer