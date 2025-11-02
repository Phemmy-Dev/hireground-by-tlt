import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Cta from '../components/sections/Cta'
import Footer from '../components/Footer'
import CountdownModal from '../components/CountdownModal'
import { useCountdownModal } from '../hooks/useCountdownModal'
import JoshuaImage from '../assets/images/speakers/Joshua.jpg'
import PaulImage from '../assets/images/speakers/paul.jpg'
import MrsAdimulaimage from '../assets/images/speakers/MrsAdimula.jpg'
import solaRahmanImage from '../assets/images/speakers/solaRahman.jpg'
import moboladeAdesokanImage from '../assets/images/speakers/moboladeAdesokan.jpg'
import profAdepoju from '../assets/images/speakers/profAdepoju.jpg'
import GovernerImage from '../assets/images/speakers/govAbdulraham.webp'
import { i } from 'framer-motion/m'

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const { showCountdownModal, handleCloseModal } = useCountdownModal()

  // Professional speakers data - placeholder cards
  const speakers = [
    // {
    //   id: 1,
    //   name: "Gov. AbdulRahman AbdulRazaq",
    //   title: "Executive Governor",
    //   company: "Kwara State",
    //   location: "Kwara State, Nigeria",
    //   image: GovernerImage,
    //   bio: "Gov. AbdulRahman AbdulRazaq is a seasoned entrepreneur and investor who has been at the forefront of supporting innovative startups across West Africa.",
    //   fullBio: "Gov. AbdulRahman AbdulRazaq serves as the Executive Governor of Kwara State, where he has implemented several initiatives to promote economic development and innovation. With over 12 years of experience in public service and governance, he has been instrumental in driving policies that support local entrepreneurs and attract investment to the region.\n\nBefore becoming Governor, AbdulRahman founded two successful companies in the fintech and logistics sectors. His deep understanding of the African market dynamics and his extensive network of investors and entrepreneurs have made him a sought-after advisor for emerging businesses.\n\nAbdulRahman is passionate about economic development in Africa and believes that supporting local entrepreneurs is key to unlocking the continent's potential. He regularly mentors young business leaders and serves on the boards of several nonprofit organizations focused on entrepreneurship education."
    // },
    {
      id: 1,
      name: "Joshua Oroge",
      title: "CEO/Founder",
      company: "The Light Tutors",
      location: "Nigeria",
      image: JoshuaImage,
      bio: "Joshua Oroge is a visionary leader in the education technology space, dedicated to transforming learning experiences across Africa.",
      fullBio: "Joshua Oroge is the CEO and Founder of The Light Tutors, an innovative edtech company focused on providing high-quality tutoring services to students across Africa. With a background in computer science and a passion for education, Joshua has been at the forefront of leveraging technology to enhance learning outcomes.\n\nUnder his leadership, The Light Tutors has developed a unique platform that connects students with experienced tutors, offering personalized learning experiences tailored to individual needs. Joshua is committed to making quality education accessible to all and has implemented several initiatives to support underprivileged students.\n\nIn addition to his work at The Light Tutors, Joshua is a sought-after speaker and mentor in the edtech community, regularly sharing his insights on the future of education and the role of technology in driving positive change."
    },
    {
      id: 3,
      name: "Paul Adeagbo",
      title: "Career Coach & Editorial Director",
      company: "MindShift Consulting LTD",
      location: "Nigeria",
      image: PaulImage,
      bio: "Paul Adeagbo is on a mission to transform Nigerian graduates into global talents through strategic career coaching and professional development.",
      fullBio: "Paul Adeagbo is on a mission with MindShift Consulting LTD to transform Nigerian graduates into global talents. He is a Career Coach with over five years of experience whose Job Search strategy has assisted over 300 clients to secure coveted job opportunities across diverse sectors.\n\nHe has provided invaluable support to 15 clients who successfully gained admission to graduate programs, including the prestigious Chevening Scholarship. He also guided 25 graduates into the Venture in Management Program at Lagos Business School.\n\nBeyond his coaching, Paul is the Editorial Director of EMPLOYABLE, a career development magazine that reaches over 5,000 professionals across 6 African countries. He's also the driving force behind the Campus Career and Employability Conference.\n\nPaul strongly believes that there is a strong correlation between a nation's human capital pool and her economic competitiveness. He specializes in empowering young professionals to excel in their careers, helping them access opportunities that align with their career aspirations.\n\nCrafting professional documents, such as CVs, cover letters, and admission essays, is another area where Paul's expertise shines, making these tasks more manageable and helping clients secure the career opportunities they deserve.\n\nIf you're genuinely committed to achieving your career goals, Paul is the mentor you've been searching for to begin your career transformation journey."
    },
    {
      id: 3,
      name: "Morenikeji Rade Adimula",
      title: "Human Resource Consultant",
      company: "I NEED A GOOD TEAM",
      location: "Nigeria",
      image: MrsAdimulaimage,
      bio: "Morenikeji Rade Adimula is a seasoned Human Resource Consultant with over five years of experience across diverse sectors, specializing in organizational transformation and talent management.",
      fullBio: "Morenikeji Rade Adimula is a seasoned Human Resource Consultant with a wealth of experience spanning over five years across diverse sectors. Her expertise has left an indelible mark on industries such as health, certification and training, agriculture, construction, mining and performance management, showcasing her adaptability and proficiency in navigating varied organizational landscapes.\n\nBorn with an innate drive for excellence, Morenikeji pursued her academic endeavors with zeal, obtaining a Bachelor of Science degree in International Law and Diplomacy. Eager to expand her knowledge and skill set, she pursued further education, amassing a collection of certificates across multiple sectors. These certifications serve as a testament to her commitment to continuous learning and professional development.\n\nThroughout her career, Morenikeji has been a catalyst for organizational transformation, specializing in building robust structures and fostering vibrant cultures within the companies she serves. Her consultancy engagements have primarily revolved around collaborating with organizations and start-ups, where she has played a pivotal role in shaping their organizational identity and operational frameworks.\n\nCurrently, she provides her consultancy services to I NEED A GOOD JOB and I NEED A GOOD TEAM, an HR consulting firm, where she serves as a trusted advisor to a diverse array of organizations, contributing her insights and guidance to enhance their HR practices and overall effectiveness.\n\nMorenikeji's proficiency spans the entire HR spectrum, with a focus on recruitment, talent management, onboarding, training, and performance management. Her proven track record of delivering results and her innate ability to understand the unique needs of each organization set her apart as a trusted partner in the pursuit of excellence.\n\nIn her spare time, Morenikeji remains committed to community engagement and mentorship initiatives, where she shares her knowledge and experiences to uplift aspiring HR professionals. Her dedication to her craft, coupled with her passion for making a meaningful impact, underscores Morenikeji Rade Adimula as a distinguished figure in the field of Human Resource Consultancy."
    },
    {
      id: 4,
      name: "Sola Rahman",
      title: "Event Planner & Master of Ceremonies",
      company: "The Sola Rahman Brand",
      location: "Nigeria",
      image: solaRahmanImage,
      bio: "Sola Rahman is a dynamic event planner and master of ceremonies known for putting event hosting on a new pedestal, turning moments into memorable experiences.",
      fullBio: "Sola Rahman is a dynamic event planner and master of ceremonies operating under his brand, The Sola Rahman Brand.\n\nAs a compere, Sola is described as young, versatile and engaging. He has hosted over 250 events, each one offering him the opportunity to bring energy, flair and professionalism to the stage.\n\nAs an event planner he delivers bespoke services: crafting occasions that reflect each client's vision, whether it's for weddings, social celebrations or business functions.\n\nKnown for putting event hosting on a new pedestal, Sola Rahman's ethos centres on turning moments into memorable experiences, where seamless coordination, warm hosting, and thoughtful design converge. He brings both the mic and the blueprint: hosting events with charisma and planning them with precision."
    },
    {
      id: 5,
      name: "Mobolade Adesokan",
      title: "Founder ",
      company: "Equipr",
      location: "Nigeria",
      image: moboladeAdesokanImage,
      bio: "Miriam Mobolade Adesokan is a leader in business and portfolio management, passionate about helping people turn their ideas into profitable ventures.",
      fullBio: "Miriam Mobolade Adesokan is a leader in business and portfolio management, passionate about helping people turn their ideas into profitable ventures.\n\nShe is a people builder and avid investor in communities, with over a decade experience, coaching CEOs from diverse walks of life. She is also a process development guru, with experience helping companies to design their strategy, build stronger infrastructure, and develop their teams.\n\nShe is a firm believer in the New Nigeria, a Nigeria where every individual can achieve their highest potential and thrive.\n\nShe started her career in Biology and Nursing at the Bloomfield College of Montclair State University in New Jersey, went on to earn an MSc in Clinical Research from the University of Hertfordshire Hatfield, UK. She is a trained Project Management Practitioner with a PRINCE II from Pearson Mayfield Imperial College London, switched careers to project management and eventually leading global projects in Healthcare across various continents: NA, EU, EMEA, Asia Pacific regions.\n\nShe started her first company in 2013 - since then she has helped many people to start new businesses or revitalise already established ones, implementing risk and quality management systems and processes, training and compliance systems, process improvement strategies, designing company strategies and culture, helping companies source infrastructure to enhance growth.\n\nShe is the Founder of Equipr for Advancement Foundation, the umbrella organization for the equipr African Youth Partnership, an organization focused on youth advancement for Africa's undergraduate and graduate students, with over 150 students mentored within the five batches of students registered since November 2021. She is also the CEO for Swoop, Anchor Therapeutics Ltd to mention a few.\n\nShe is a mum and a wife, a songwriter, and she teaches music theory and beginners piano in her spare time."
    },
    {
      id: 6,
      name: "Prof. Feyi Grace Adepoju",
      title: "Professor of Ophthalmology & Consultant Ophthalmologist",
      company: "University of Ilorin Teaching Hospital",
      location: "Kwara State, Nigeria",
      image: profAdepoju,
      bio: "Professor Feyi Grace Adepoju is the first female Professor of Ophthalmology in Kwara State, a Consultant Ophthalmologist at the University of Ilorin Teaching Hospital, and a distinguished academic in the College of Health Sciences.",
      fullBio: "Professor Feyi Grace Adepoju is the first female Professor of Ophthalmology in Kwara State, a Consultant Ophthalmologist at the University of Ilorin Teaching Hospital, and a distinguished academic in the College of Health Sciences.\n\nShe graduated with an MBBS from Ahmadu Bello University, Zaria, where she emerged as the Overall Best Final-Year Student. She won multiple awards, including the Alba Medical Prize, the A.I. Saha Prize for Community Medicine, the Best Prize in Obstetrics and Gynaecology, and the Glaxo Paediatrics Prize, along with additional prizes in Agricultural Science, Biology, Physics, and Mathematics.\n\nProfessor Adepoju later obtained an MSc in Community Eye Health from the London School of Hygiene and Tropical Medicine, supported by the Commonwealth and DFID scholarships. She is a Fellow of both the West African College of Surgeons and the National Postgraduate Medical College of Nigeria, and she earned the Oyin Olurin Prize as the best candidate in Part I of the Fellowship examinations.\n\nHer career spans over three decades, marked by pioneering work in community ophthalmology, cataract surgery, and anterior segment practice. She has organized over 200 community outreaches, screened more than 300,000 people, and restored sight through over 30,000 eye surgeries. Beyond the operating theatre, she has championed eye health through television and radio programmes, public health campaigns, and award-winning educational films, including You Are My Eye, broadcast on 27 television stations across Nigeria and beyond.\n\nA prolific scholar, she has published over 72 scientific works, authored four books and four textbook chapters, and served as an examiner and reviewer for national and international journals. She currently serves as Director of the Medical Education Resource Unit at the University of Ilorin, President of the Bioethics Society of Nigeria, Chairman of Women Ophthalmology of Nigeria, and Treasurer/Board Member of the African Ophthalmology Council.\n\nHer excellence has been recognized with numerous prestigious awards, including the Novartis International Excellence in Ophthalmology Vision Award, the American Academy of Ophthalmology Leadership Development Award, and the Excellence in Vision Award for Prevention of Blindness, presented by the Africa Ophthalmology Forum and the Ophthalmological Society of Nigeria.\n\nBeyond academia and medicine, Professor Adepoju is a film actress with over 150 appearances, a playwright, and an ordained Reverend of Abundant Life Gospel Church. She is the founder of two NGOs dedicated to supporting the underprivileged and remains a passionate advocate for education, health, and community empowerment.\n\nA woman of many parts—scholar, surgeon, teacher, community advocate, actress, and minister of faith—she is married to Rev. Yemi Adepoju and is blessed with children and grandchildren."
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
      <div className={`transition-all duration-300 ${showCountdownModal ? 'blur-sm' : ''}`}>
        <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 lg:pt-40 pb-12 bg-gradient-to-r from-orange-600 to-red-600">
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