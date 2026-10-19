import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

const contactRows = [
  { icon: FiMail, label: 'General Inquiries', value: 'hireground@thelightutors.com', href: 'mailto:hireground@thelightutors.com' },
  { icon: FiPhone, label: 'Partnerships', value: 'joshua@thelightutors.com', href: 'mailto:joshua@thelightutors.com' },
  { icon: FiMapPin, label: 'Event Location', value: 'Ilorin, Kwara State, Nigeria' },
  { icon: FiClock, label: 'Response time', value: 'Within 24 hours' },
]

const ContactHero = () => {
  return (
    <section className="bg-night text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <p className="text-gold font-semibold text-base sm:text-lg mb-5">Get In Touch</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-white/85 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
            Have questions about HireGround? Want to partner with us?
            Looking to attend or speak at our event? We're here to help make it happen.
          </p>
          <a href="#contact-form" className="btn btn-primary text-lg px-8 py-4">
            Send us a message
          </a>
        </motion.div>

        <div className="lg:col-span-5 bg-white text-ink rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold mb-1" style={{ fontStretch: '110%' }}>We're Here to Help</h2>
          <p className="text-muted mb-6">Choose the best way to reach us</p>
          <ul className="divide-y divide-line border-t border-line">
            {contactRows.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 py-4">
                <span className="w-10 h-10 rounded-md bg-mist text-night flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted">{label}</p>
                  {href ? (
                    <a href={href} className="font-semibold hover:text-ember-deep break-all">{value}</a>
                  ) : (
                    <p className="font-semibold">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
