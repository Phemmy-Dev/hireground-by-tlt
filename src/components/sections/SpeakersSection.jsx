import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiSparkles, HiEye, HiArrowRight } from 'react-icons/hi';

const SpeakersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Sample speakers data - replace with your actual data
  const speakers = [
    {
      id: 1,
      name: "Seyi Abiodun",
      title: "Executive-level Business Consultant",
      subtitle: "Strategic Innovation Leader",
      image: "/api/placeholder/400/500", // Replace with actual image
      company: "Tech Innovations Ltd",
      specialties: ["Business Strategy", "Digital Transformation", "Leadership"]
    },
    {
      id: 2,
      name: "Rufai Ismaila",
      title: "Visual Artist",
      subtitle: "Creative Visionary",
      image: "/api/placeholder/400/500", // Replace with actual image
      company: "Kingsville Studios",
      specialties: ["Visual Arts", "Creative Direction", "Brand Design"]
    },
    {
      id: 3,
      name: "Al Amin Idris",
      title: "CEO of Interface Africa",
      subtitle: "Tech Entrepreneur",
      image: "/api/placeholder/400/500", // Replace with actual image
      company: "Interface Africa",
      specialties: ["Tech Leadership", "Innovation", "Africa Tech"]
    },
    {
      id: 4,
      name: "Ganiyat Sani",
      title: "Cultural Manager and Curator",
      subtitle: "Cultural Innovation Expert",
      image: "/api/placeholder/400/500", // Replace with actual image
      company: "Cultural Dynamics",
      specialties: ["Cultural Management", "Arts Curation", "Community Building"]
    },
    {
      id: 5,
      name: "Sarah Johnson",
      title: "Product Design Lead",
      subtitle: "UX Innovation Specialist",
      image: "/api/placeholder/400/500", // Replace with actual image
      company: "Design Forward",
      specialties: ["Product Design", "User Experience", "Design Systems"]
    },
    {
      id: 6,
      name: "Michael Chen",
      title: "Startup Founder",
      subtitle: "Serial Entrepreneur",
      image: "/api/placeholder/400/500", // Replace with actual image
      company: "NextGen Ventures",
      specialties: ["Startup Growth", "Venture Capital", "Innovation"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 120
      }
    }
  };

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
      const gap = 24; // 1.5rem gap
      const scrollAmount = cardWidth + gap;
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 300;
      const gap = 24; // 1.5rem gap
      const scrollAmount = cardWidth + gap;
      
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ff7300 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full border border-orange-200 mb-8"
          >
            <HiSparkles className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-800 font-medium text-sm sm:text-base">
              SPEAKERS
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-gray-900">Meet our </span>
            <span 
              className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
              style={{ color: '#ff7300' }}
            >
              seasoned speakers
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Learn from industry leaders, innovators, and visionaries who are shaping the future of work and technology.
          </motion.p>
        </motion.div>

        {/* Navigation Controls - Desktop */}
        <div className="hidden lg:flex justify-end items-center mb-8 gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToPrev}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50"
          >
            <HiChevronLeft className="w-6 h-6 text-orange-600" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToNext}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50"
          >
            <HiChevronRight className="w-6 h-6 text-orange-600" />
          </motion.button>
        </div>

        {/* Speakers Grid/Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Desktop Horizontal Scroll */}
          <div 
            ref={scrollContainerRef}
            className="hidden lg:flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                variants={cardVariants}
                custom={index}
                className="flex-shrink-0 w-80"
              >
                <SpeakerCard speaker={speaker} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 sm:gap-8">
            {speakers.slice(0, 4).map((speaker, index) => (
              <motion.div
                key={speaker.id}
                variants={cardVariants}
                custom={index}
              >
                <SpeakerCard speaker={speaker} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* See All Speakers Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 lg:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{ backgroundColor: '#ff7300' }}
          >
            <span className="mr-3">SEE ALL SPEAKERS</span>
            <HiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicators - Mobile */}
        <div className="flex lg:hidden justify-center mt-8 gap-2">
          {[0, 1, 2].map((dot, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Speaker Card Component
const SpeakerCard = ({ speaker }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100/50"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Border Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300">
        {/* Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {speaker.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <p className="text-gray-600 text-sm">Speaker Photo</p>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center p-6"
        >
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-orange-600 font-medium text-sm hover:bg-white transition-all duration-300"
          >
            <HiEye className="w-4 h-4" />
            View Profile
          </motion.button>
        </motion.div>

        {/* Top Right Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Name and Title */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
            {speaker.name}
          </h3>
          <p className="text-orange-600 font-semibold text-base mb-1">
            {speaker.title}
          </p>
          <p className="text-gray-600 text-sm">
            {speaker.subtitle}
          </p>
        </div>

        {/* Company */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-gray-700 font-medium text-sm">{speaker.company}</span>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {speaker.specialties.slice(0, 2).map((specialty, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full border border-orange-200"
            >
              {specialty}
            </span>
          ))}
          {speaker.specialties.length > 2 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              +{speaker.specialties.length - 2} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  );
};

export default SpeakersSection;