import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import hero1 from '../assets/images/hero1.jpg'
import hero2 from '../assets/images/hero2.jpg'
import hero3 from '../assets/images/hero3.jpg'
import hero4 from '../assets/images/hero4.jpg'

const Hero = ({ title, text, herobtn, herolink = "https://trankets.com/invite/hireground-kwara-career-fair-2026" }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92svh] flex items-end overflow-hidden bg-night-deep">
      {/* Photos from HireGround 2025 */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Flat scrim so white type stays legible on any photo */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/45"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-14 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <p className="text-white/85 text-base sm:text-lg font-medium mb-5">
            The Light Tutors presents
          </p>

          <h1 className="text-white text-[3.25rem] sm:text-7xl lg:text-[7.5rem] mb-6">
            {title}
          </h1>

          <p className="text-white text-xl sm:text-2xl max-w-2xl mb-3">
            {text}
          </p>
          <p className="text-gold font-semibold text-base sm:text-lg mb-10">
            31st October 2026, Ilorin Innovation Hub
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={herolink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-lg px-8 py-4"
            >
              {herobtn}
            </a>
            <Link to="/sponsors" className="btn btn-on-dark text-lg px-8 py-4">
              Partner with us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
