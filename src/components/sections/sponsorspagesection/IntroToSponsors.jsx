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
            
            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto border-2 border-red-500 ">
              <h1 className='text-4xl font-bold text-red-500'>Update this</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi ullam repellendus blanditiis neque recusandae consequatur, sapiente similique nihil minus delectus alias possimus perspiciatis facere iste illo totam dolores quaerat vero asperiores eveniet modi reiciendis ea accusamus? Nulla, quae dolorum quidem labore quam, ratione saepe at voluptates debitis fugiat doloribus.
              </p>
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam iure cupiditate ducimus omnis ipsam animi aperiam, ipsum, ratione necessitatibus, sunt placeat odit eum odio esse exercitationem expedita distinctio possimus dolor assumenda dignissimos eius nostrum dolorum! Pariatur minima quasi possimus?
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