import React from 'react'
import { motion } from 'framer-motion'

const IntroToSponsors = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Welcome to <span className="text-orange-600">HireGround</span>
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p>
                HireGround is more than just a career fair. It's a transformative movement designed to bridge the gap between talent and opportunity across Nigeria. On December 4th, 2025, we're bringing together over 1,000 onsite participants and 10,000+ virtual attendees, creating the largest career development platform in the country.
              </p>
              
              <p>
                As a HireGround sponsor, you're not just supporting an event; you're investing in the future workforce of Nigeria. Our participants are ambitious young professionals, fresh graduates, and career changers who are serious about their professional growth. They represent the next generation of leaders, innovators, and dedicated employees who will drive businesses forward.
              </p>

              <p>
                This is your opportunity to showcase your brand to a highly engaged audience, connect with top-tier talent, and demonstrate your commitment to youth empowerment and professional development. Join us in creating pathways to success and building the careers that will shape Nigeria's future.
              </p>
              
              <p className="text-xl sm:text-2xl font-semibold text-orange-600 mt-8">
                LET'S BUILD THE FUTURE WORKFORCE TOGETHER.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default IntroToSponsors