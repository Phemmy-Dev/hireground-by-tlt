import React from 'react'
import { motion } from 'framer-motion'
import { FiEye, FiTarget, FiHeart } from 'react-icons/fi'

const VisionAndMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Driven by Purpose, Guided by Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              At HireGround, we believe every individual deserves access to meaningful career opportunities and the tools to achieve their professional dreams.
            </p>
          </motion.div>

          {/* Vision and Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg p-8 border border-line transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center mr-4">
                  <FiEye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                To see a generation of young Nigerians graduates, undergraduates, and corps members, empowered with the confidence, competence, and character to excel in interviews, secure opportunities, and contribute meaningfully to society.
              </p>
              <div className="bg-white/60 rounded-lg p-4 border border-line">
                <p className="text-forest font-medium text-sm italic">
                  "Building bridges between potential and success, one career at a time."
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-mist rounded-lg p-8 border border-line transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <FiTarget className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                To equip 500 young people with practical interview readiness and employability skills through targeted training, mentorship, and community support, thereby bridging the gap between education and workplace success.
              </p>
              <div className="bg-white/60 rounded-lg p-4 border border-orange-200">
                <p className="text-orange-800 font-medium text-sm italic">
                  "Empowering careers, connecting talent, building futures."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="bg-forest text-white rounded-lg p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontStretch: '115%' }}>Our Core Values</h3>
              <p className="text-white/75">
                These principles guide every decision we make and every interaction we have
              </p>
            </div>
            <dl className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {[
                ['Excellence', 'We strive for the highest standards in everything we do'],
                ['Innovation', 'We embrace new ideas and creative solutions'],
                ['Integrity', 'We build trust through transparency and honesty'],
                ['Impact', 'We measure success by the lives we transform'],
              ].map(([name, text]) => (
                <div key={name} className="border-t-2 border-sun pt-4">
                  <dt className="text-xl font-bold mb-1">{name}</dt>
                  <dd className="text-white/75">{text}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Call to Action */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-orange-600 rounded-lg p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Mission
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Be part of a movement that's reshaping careers and transforming lives across the world. Your journey to professional excellence starts here.
              </p>
              <motion.a
                href="https://bit.ly/vtltcf25"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-md hover:bg-gray-50 transition-all duration-300"
              >
                Get Involved
              </motion.a>
            </div>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  )
}

export default VisionAndMission