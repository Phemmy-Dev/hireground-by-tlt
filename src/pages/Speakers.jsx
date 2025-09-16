import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Cta from '../components/sections/Cta'
import Footer from '../components/Footer'
import JoshuaImage from '../assets/images/speakers/Joshua.jpg'
import GovernerImage from '../assets/images/speakers/govAbdulraham.webp'

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  // Professional speakers data - placeholder cards
  const speakers = [
    {
      id: 1,
      name: "Joshua Oroge",
      title: "CEO/Founder",
      company: "The Light Tutors",
      location: "Lagos, Nigeria",
      image: JoshuaImage,
      bio: "Joshua Oroge is a visionary leader in the education technology space, dedicated to transforming learning experiences across Africa.",
      fullBio: "Joshua Oroge is the CEO and Founder of The Light Tutors, an innovative edtech company focused on providing high-quality tutoring services to students across Africa. With a background in computer science and a passion for education, Joshua has been at the forefront of leveraging technology to enhance learning outcomes.\n\nUnder his leadership, The Light Tutors has developed a unique platform that connects students with experienced tutors, offering personalized learning experiences tailored to individual needs. Joshua is committed to making quality education accessible to all and has implemented several initiatives to support underprivileged students.\n\nIn addition to his work at The Light Tutors, Joshua is a sought-after speaker and mentor in the edtech community, regularly sharing his insights on the future of education and the role of technology in driving positive change."
    },
    {
      id: 2,
      name: "Gov. AbdulRahman AbdulRazaq",
      title: "Executive Governor",
      company: "Kwara State",
      location: "Kwara State, Nigeria",
      image: GovernerImage,
      bio: "Gov. AbdulRahman AbdulRazaq is a seasoned entrepreneur and investor who has been at the forefront of supporting innovative startups across West Africa.",
      fullBio: "Gov. AbdulRahman AbdulRazaq serves as the Executive Governor of Kwara State, where he has implemented several initiatives to promote economic development and innovation. With over 12 years of experience in public service and governance, he has been instrumental in driving policies that support local entrepreneurs and attract investment to the region.\n\nBefore becoming Governor, AbdulRahman founded two successful companies in the fintech and logistics sectors. His deep understanding of the African market dynamics and his extensive network of investors and entrepreneurs have made him a sought-after advisor for emerging businesses.\n\nAbdulRahman is passionate about economic development in Africa and believes that supporting local entrepreneurs is key to unlocking the continent's potential. He regularly mentors young business leaders and serves on the boards of several nonprofit organizations focused on entrepreneurship education."
    },
    {
      id: 3,
      name: "Sarah Adebayo",
      title: "Director of Innovation",
      company: "Global Bank Africa",
      location: "Accra, Ghana",
      image: null,
      bio: "Sarah Adebayo leads digital transformation initiatives in the financial services sector, focusing on innovative banking solutions for emerging markets.",
      fullBio: "Sarah Adebayo is the Director of Innovation at Global Bank Africa, where she spearheads digital transformation initiatives that are revolutionizing banking across the continent. With over 10 years of experience in financial technology, she has led the development of mobile banking platforms that serve over 5 million customers.\n\nSarah holds an MBA in Finance and has worked with major financial institutions across Africa and Europe. Her expertise in digital payments, blockchain technology, and financial inclusion has made her a key figure in shaping the future of African banking.\n\nShe is committed to increasing financial inclusion across Africa and has launched several initiatives to bring banking services to underserved communities. Sarah is also an advocate for women in fintech and mentors female professionals in the financial services industry."
    },
    {
      id: 4,
      name: "Michael Obi",
      title: "Founder & CEO",
      company: "EduTech Solutions",
      location: "Port Harcourt, Nigeria",
      image: null,
      bio: "Michael Obi is revolutionizing education in Africa through innovative technology solutions that make quality learning accessible to millions of students.",
      fullBio: "Michael Obi is the Founder and CEO of EduTech Solutions, an educational technology company that has transformed learning experiences for over 2 million students across Africa. His platform provides quality educational content and interactive learning tools to students in remote and underserved areas.\n\nWith a background in both technology and education, Michael identified the critical gap in educational resources across Africa and developed innovative solutions to bridge this divide. His work has been recognized by UNESCO and other international organizations for its impact on educational equity.\n\nMichael is passionate about democratizing education and ensuring that every child in Africa has access to quality learning opportunities. He regularly collaborates with governments and NGOs to implement educational technology initiatives and has received numerous awards for his contributions to education in Africa."
    },
    {
      id: 5,
      name: "Fatima Al-Zahra",
      title: "Chief Operating Officer",
      company: "Green Energy Africa",
      location: "Cairo, Egypt",
      image: null,
      bio: "Fatima Al-Zahra is driving sustainable energy solutions across Africa, leading initiatives that bring clean power to communities throughout the continent.",
      fullBio: "Fatima Al-Zahra serves as the Chief Operating Officer of Green Energy Africa, a leading renewable energy company that has installed solar power systems in over 500 communities across the continent. With expertise in sustainable energy solutions and project management, she has been instrumental in expanding access to clean electricity.\n\nFatima holds a Master's degree in Environmental Engineering and has over 8 years of experience in the renewable energy sector. She has led cross-functional teams in implementing large-scale solar and wind projects that have brought power to over 1 million people in rural areas.\n\nShe is a strong advocate for environmental sustainability and women's empowerment in the energy sector. Fatima regularly speaks at climate conferences and has been recognized for her contributions to sustainable development in Africa."
    },
    {
      id: 6,
      name: "David Mensah",
      title: "Head of Digital Strategy",
      company: "MediaCorp West Africa",
      location: "Accra, Ghana",
      image: null,
      bio: "David Mensah is transforming media and communications across West Africa through innovative digital strategies and content platforms.",
      fullBio: "David Mensah is the Head of Digital Strategy at MediaCorp West Africa, where he oversees digital transformation initiatives for one of the region's largest media companies. With over 9 years of experience in digital marketing and content strategy, he has revolutionized how media companies engage with audiences across Africa.\n\nDavid has successfully launched multiple digital platforms that reach over 10 million users monthly. His innovative approach to content distribution and audience engagement has set new standards in the African media industry.\n\nHe is passionate about promoting African stories and voices on global platforms. David mentors young content creators and digital marketers, and he regularly speaks at conferences about the future of media in Africa."
    },
    {
      id: 7,
      name: "Dr. Kemi Adeleke",
      title: "Research Director",
      company: "Health Innovation Lab",
      location: "Ibadan, Nigeria",
      image: null,
      bio: "Dr. Kemi Adeleke is pioneering healthcare innovation in Africa, developing solutions that improve health outcomes for communities across the continent.",
      fullBio: "Dr. Kemi Adeleke is the Research Director at Health Innovation Lab, where she leads groundbreaking research in healthcare technology and medical innovation. With a medical degree and a PhD in Public Health, she has dedicated her career to addressing healthcare challenges in Africa through innovative solutions.\n\nDr. Adeleke has led research projects that have resulted in the development of low-cost medical devices and telemedicine platforms that serve rural communities. Her work has been published in numerous international journals and has received funding from major global health organizations.\n\nShe is committed to building local capacity in healthcare innovation and has trained over 200 healthcare professionals in research methodology and technology implementation. Dr. Adeleke is also an advocate for women in science and actively promotes STEM education for young girls."
    }
  ]

  // Placeholder component for speaker images
  const SpeakerImagePlaceholder = ({ name, className }) => (
    <div className={`${className} bg-gradient-to-br from-orange-100 to-red-100 flex flex-col items-center justify-center p-2`}>
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
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl"
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Meet Our <span className="text-yellow-300">Speakers</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                Learn from industry leaders, innovators, and change-makers who are shaping the future of work and technology across Africa and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <FiUsers className="w-5 h-5" />
                  <span>Expert Speakers</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-5 h-5" />
                  <span>Kwara State, Nigeria</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-16">
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
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedSpeaker(speaker)}
                >
                  {/* Speaker Image */}
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
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
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <Cta />
      <Footer />

      {/* Speaker Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}
    </div>
  )
}

export default Speakers