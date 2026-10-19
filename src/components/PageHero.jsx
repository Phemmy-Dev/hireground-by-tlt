import React from 'react'
import { motion } from 'framer-motion'

// Shared hero for inner pages: a bottom-left poster headline over an event
// photo (with a flat scrim), or on the deep green brand colour when no photo
// is given. Extra content (buttons, facts) goes in children.
const PageHero = ({ title, intro, image, imageAlt = '', kicker, children }) => {
  return (
    <section className={`relative overflow-hidden ${image ? 'min-h-[70svh] flex items-end bg-night-deep' : 'bg-night'}`}>
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt={imageAlt} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/65 sm:bg-black/55"></div>
        </div>
      )}

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-14 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {kicker && (
            <p className="text-gold font-semibold text-base sm:text-lg mb-5">{kicker}</p>
          )}
          <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl mb-6">{title}</h1>
          {intro && (
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-3xl">{intro}</p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero
