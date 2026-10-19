import React from 'react'
import { motion } from 'framer-motion'

const IntroToSponsors = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-8">
              Welcome to HireGround
            </h2>
            
            <div className="space-y-6 text-lg text-ink/85 leading-relaxed">
              <p>
                HireGround is more than just a career fair. It's a transformative movement designed to bridge the gap between talent and opportunity across Nigeria. We're bringing together over 1,000 onsite participants and 10,000+ virtual attendees, creating the largest career development and professional growth platform in the region.
              </p>
              
              <p>
                Whether you join us as a <strong>corporate sponsor</strong> or an <strong>exhibiting brand</strong>, you are placing your business directly in front of ambitious young professionals, fresh graduates, tech innovators, and career changers who are eager to engage with forward-thinking solutions.
              </p>

              <p>
                Showcase your products in our high-traffic exhibition hall, take the main stage for an exclusive speaking pitch to the entire audience, or cement your organization as an official champion of youth empowerment and economic development.
              </p>
              
              <p className="text-2xl font-bold text-ember-deep mt-8">
                Let's build the future workforce together.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default IntroToSponsors