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
                At HireGround, we create experiences that go beyond events, we shape moments that resonate. 
                In 2024, we connected thousands. In 2025, we embrace transformation, a call to carry the torch forward, 
                to inspire change, and to evolve.
              </p>
              
              <p>
                Our sponsors are not just supporters; they are co-creators of an experience that leaves a lasting impact, 
                igniting minds, touching hearts, and building a future of endless possibilities. This year, join a 
                trailblazing community of brands and visionary leaders.
              </p>
              
              <p className="text-xl sm:text-2xl font-semibold text-orange-600 mt-8">
                LET'S MOVE THE WORLD FORWARD TOGETHER.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default IntroToSponsors