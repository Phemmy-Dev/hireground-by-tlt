import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FiMail, 
  FiMapPin, 
  FiInstagram, 
  FiArrowUp
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
      { name: 'Register Now', href: 'https://trankets.com/invite/hireground-kwara-career-fair-2026', external: true },
      { name: 'Become a Sponsor', href: 'mailto:hireground@thelightutors.com', external: true },
      { name: 'Partnership Inquiry', href: 'mailto:hireground@thelightutors.com', external: true }
    ]
  }

  const socialLinks = [
    { icon: <FiInstagram />, href: 'https://www.instagram.com/thelightutors.csr/', label: 'Instagram' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const linkClass = 'text-white/70 hover:text-gold transition-colors'

  return (
    <footer className="bg-night-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <img src={Logo} alt="HireGround" className="h-9 w-auto mb-6" />
            <p className="text-white/70 leading-relaxed mb-8 max-w-sm">
              Ilorin's career transformation event. Connecting talent, empowering professionals, and shaping the future of work across the continent.
            </p>

            <div className="space-y-3 mb-8">
              <a href="mailto:hireground@thelightutors.com" className={`flex items-center gap-3 ${linkClass}`}>
                <FiMail className="w-4 h-4 text-gold" />
                hireground@thelightutors.com
              </a>
              <p className="flex items-center gap-3 text-white/70">
                <FiMapPin className="w-4 h-4 text-gold" />
                Ilorin, Kwara State, Nigeria
              </p>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-night transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-5">Explore</h4>
              <ul className="space-y-3">
                {footerLinks.event.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className={linkClass}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-5">Take Action</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.path} className={linkClass}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-white/60">
          <span>© {currentYear} HireGround by The Light Tutors.</span>
          <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors">
            Back to Top
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
