import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Cta from '../components/sections/Cta'
import Footer from '../components/Footer'
import CountdownSection from '../components/sections/CountdownSection'
import CountdownModal from '../components/CountdownModal'
import { useCountdownModal } from '../hooks/useCountdownModal'
import speakers from '../data/speakers'

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const { showCountdownModal, handleCloseModal } = useCountdownModal()

  // Placeholder component for speaker images
  const SpeakerImagePlaceholder = ({ name, className }) => (
    <div className={`${className} bg-orange-50 flex flex-col items-center justify-center p-2`}>
      <div className="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2 text-orange-400 flex-shrink-0">
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-orange-600 font-medium text-center text-xs leading-tight px-1 overflow-hidden">{name}</span>
    </div>
  )

  // Smart Image Component with better aspect ratio handling
  const SpeakerImage = ({ src, alt, className, isModal = false }) => {
    const [imageError, setImageError] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    if (imageError || !src) {
      return <SpeakerImagePlaceholder name={alt} className={className} />
    }

    return (
      <div className={`${className} relative overflow-hidden bg-gray-100`}>
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full transition-all duration-300 ${
            isModal 
              ? 'object-cover object-center' 
              : 'object-cover object-center group-hover:scale-105'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{
            objectPosition: isModal ? 'center 20%' : 'center 30%'
          }}
        />
      </div>
    )
  }

  // Speaker Modal Component with proper error handling
  const SpeakerModal = ({ speaker, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative p-6 pb-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <FiX className="w-6 h-6 text-gray-500" />
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Speaker Image */}
              <div className="flex-shrink-0">
                <SpeakerImage
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-lg"
                  isModal={true}
                />
              </div>

              {/* Speaker Info */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{speaker.name}</h2>
                <p className="text-xl text-orange-600 font-semibold mb-2">{speaker.title}</p>
                <p className="text-lg text-gray-600 mb-4">{speaker.company} • {speaker.location}</p>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Full Bio with Error Handling */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                About {speaker.name ? speaker.name.split(' ')[0] : 'Speaker'}
              </h3>
              <div className="prose prose-gray max-w-none">
                {(speaker.fullBio || speaker.bio || 'No biography available.').split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

  return (
    <div className="min-h-screen bg-mist">
      <div className={`transition-all duration-300 ${showCountdownModal ? 'blur-sm' : ''}`}>
        <Navbar />
      
      <PageHero
        kicker="HireGround 2026, Kwara State, Nigeria"
        title="Meet Our Speakers"
        intro="Learn from industry leaders, innovators, and change-makers who are shaping the future of work and technology across Africa and beyond."
      />

      {/* Speakers Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-lg border border-line hover:border-ink transition-colors overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedSpeaker(speaker)}
                >
                  {/* Speaker Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <SpeakerImage
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full"
                      isModal={false}
                    />
                  </div>

                  {/* Speaker Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {speaker.name}
                    </h3>
                    <p className="text-orange-600 font-semibold mb-1">{speaker.title}</p>
                    <p className="text-gray-600 text-sm mb-4">{speaker.company}</p>
                    <p className="text-gray-700 leading-relaxed text-sm mb-4 line-clamp-3">
                      {speaker.bio}
                    </p>

                    {/* Read More Button */}
                    <button className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors duration-300 flex items-center gap-1">
                      Read Full Bio
                      <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <CountdownSection tone="white" />
        <Cta />
        <Footer />
      </div>

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}

      {/* Countdown Modal */}
      <CountdownModal 
        isOpen={showCountdownModal} 
        onClose={handleCloseModal} 
      />
    </div>
  )
}

export default Speakers