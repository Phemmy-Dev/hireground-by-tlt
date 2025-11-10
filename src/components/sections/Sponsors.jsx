import React from 'react'
import { motion } from 'framer-motion'
import kwgovtlogo from '../../assets/images/sponsors/kwgovlogo.webp'
import tltsponsorlogo from '../../assets/images/sponsors/tltsponsor.png'
import INeedAGoodTeamLogo from '../../assets/images/sponsors/ineedagoodteamlogo.jpg'
import Mindshiftlogo from '../../assets/images/sponsors/mindshiftlogo.png'
import anchor from '../../assets/images/sponsors/anchor.png'
import cw from '../../assets/images/sponsors/cw.png'
import swoop from '../../assets/images/sponsors/swoop.png'
import equipr from '../../assets/images/sponsors/equipr.jpg'


const Sponsors = () => {
  // Sponsor data - all sponsors are equal
  const sponsors = [
    {
      id: 1,
      name: 'Kwara State Government',
      logo: kwgovtlogo,
      isReal: true
    },
        {
      id: 2,
      name: 'The Light Tutors',
      logo: tltsponsorlogo,
      isReal: true
    },
    {
      id: 3,
      name: 'I Need A Good Team',
      logo: INeedAGoodTeamLogo,
      isReal: true
    },
    {
      id: 4,
      name: 'MindShift Consulting Inc',
      logo: Mindshiftlogo,
      isReal: true
    },
    {
      id: 5,
      name: 'CW Music & Media',
      logo: cw,
      isReal: true
    },
    {
      id: 6,
      name: 'Equipr',
      logo: equipr,
      isReal: true
    },
    {
      id: 7,
      name: 'Swoop',
      logo: swoop,
      isReal: true
    },
    {
      id: 8,
      name: 'Anchor',
      logo: anchor,
      isReal: true
    },
    // {
    //   id: 9,
    //   name: 'Partner Sponsor',
    //   logo: null,
    //   isReal: false
    // },
    // {
    //   id: 10,
    //   name: 'Partner Sponsor',
    //   logo: null,
    //   isReal: false
    // }
  ]

  const PlaceholderLogo = ({ name }) => {
    return (
      <div className="w-full h-full rounded-xl border-2 border-dashed bg-gradient-to-br from-gray-100 to-gray-50 border-gray-200 text-gray-600 flex flex-col items-center justify-center p-4 transition-all duration-300 hover:shadow-md hover:border-orange-300 hover:text-orange-600">
        <div className="w-8 h-8 mb-2 opacity-40">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-xs font-medium text-center leading-tight">{name}</span>
      </div>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-4"
          >
            <span className="text-orange-600 font-medium text-sm uppercase tracking-wide">Sponsors</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Become a <span className="text-orange-600">Sponsor</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Showcase your brand to over 1,000 participants onsite and 10,000 virtually nationwide. Position your company at the heart of youth empowerment and talent development
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.a
              href="mailto:hireground@thelightutors.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>

        {/* Sponsors Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center"
          >
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-24 md:h-28 flex items-center justify-center"
              >
                {sponsor.isReal ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-4 flex items-center justify-center group"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full h-full"
                  >
                    <PlaceholderLogo name={sponsor.name} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Partners Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-sm">
              Join our amazing partners in supporting career transformation across Nigeria
            </p>
          </motion.div>

          {/* Partnership Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Partnership Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Brand Visibility</h4>
                <p className="text-gray-600 text-sm">Showcase your brand to 1,000+ onsite participants and 10,000+ virtual attendees.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Networking</h4>
                <p className="text-gray-600 text-sm">Build connections with industry leaders, recruiters, and emerging talent.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                <p className="text-gray-600 text-sm">Play a key role in shaping careers and empowering the next generation of professionals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors