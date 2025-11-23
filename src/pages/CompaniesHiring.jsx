import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiMapPin, FiBriefcase, FiExternalLink, FiX, FiUsers, FiGlobe } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CountdownModal from '../components/CountdownModal'
import { useCountdownModal } from '../hooks/useCountdownModal'

const CompaniesHiring = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCompany, setSelectedCompany] = useState(null)
  const { showCountdownModal, handleCloseModal } = useCountdownModal()

  // Real companies data from HireGround partners
  const companies = [
    {
      id: 1,
      name: "The Light Tutors Limited",
      logo: "https://via.placeholder.com/120/FF6B35/FFFFFF?text=TLT",
      industry: "Education and Training",
      type: "Direct Employer",
      location: "Online",
      employees: "11 - 50",
      website: "https://www.thelightutors.com",
      availableJobs: 1,
      contactPerson: "Rose Oroge",
      contactRole: "Human Resources Manager",
      contactPhone: "08036361173",
      contactEmail: "rose@thelightutors.com",
      address: "Online",
      rolesOffered: "Entry-Level Roles, Human Resources",
      keySkills: "Experience in Human Resources management",
      conductingInterviews: true,
      needsBoothSpace: true,
      needsHRSupport: true,
      description: "We offer personalized tutoring sessions in Mathematics, English, and Sciences to students from KS2 up to GCSE level, as well as those in elementary (Grades K–5), middle (Grades 6–8), and high school (Grades 9–12). In addition, we provide bespoke language learning for beginners and intermediate learners in Yoruba and French.",
      credentials: []
    },
    {
      id: 2,
      name: "Victor Sun Bespoke",
      logo: "https://via.placeholder.com/120/8B4513/FFFFFF?text=VSB",
      industry: "Fashion",
      type: "Direct Employer",
      location: "Ilorin, Kwara State",
      employees: "1 - 10",
      website: "https://www.instagram.com/victor_sun_bespoke",
      availableJobs: 3,
      contactPerson: "Simeon Yakubu",
      contactRole: "Creative Director",
      contactPhone: "07065816296",
      contactEmail: "vicsun14@gmail.com",
      address: "3rd Avenue Araromi Akata Tanke, Beside Alao farm, Ilorin",
      rolesOffered: "Creative/Design, Internship Positions",
      keySkills: "Tailors/internship/Training",
      conductingInterviews: true,
      needsBoothSpace: true,
      needsHRSupport: true,
      description: "Victor Sun Bespoke is a Unisex fashion brand specializing in premium, made-to-measure suits and traditional wear that blend African heritage with modern elegance. Founded with a passion for craftsmanship, precision, and style, we cater to discerning clients who value quality, uniqueness, and a perfect fit. From detailed tailoring to personalized service, our goal is to redefine bespoke fashion in Nigeria and beyond.",
      credentials: []
    },
    {
      id: 3,
      name: "Anchor Therapeutics Ltd",
      logo: "https://via.placeholder.com/120/00A86B/FFFFFF?text=ATL",
      industry: "Healthcare",
      type: "Direct Employer",
      location: "Ibadan, Oyo State",
      employees: "11 - 50",
      website: "",
      availableJobs: 1,
      contactPerson: "Mrs Miriam Adesokan",
      contactRole: "CEO",
      contactPhone: "+447904932366",
      contactEmail: "mimoadesokan@gmail.com",
      address: "17 Azeez Aina Street, off Olusanya Bus Stop, Ring Road, Ibadan, Oyo State",
      rolesOffered: "Technical Roles (e.g. IT, Data, Engineering)",
      keySkills: "Chemist or Biochemist that can help with product development",
      conductingInterviews: false,
      needsBoothSpace: false,
      needsHRSupport: false,
      description: "Anchor Therapeutics Ltd is a pharmaceutical company that harnesses the power of natural products to develop innovative medicines, minimizing the adverse effects associated with synthetic drugs. Our mission is to provide safe and effective healthcare solutions, ultimately enhancing lives and promoting well-being.",
      credentials: []
    },
    {
      id: 4,
      name: "CW Music Media",
      logo: "https://via.placeholder.com/120/FF1493/FFFFFF?text=CWM",
      industry: "Education and Training",
      type: "Direct Employer",
      location: "Ibadan, Oyo State",
      employees: "1 - 10",
      website: "https://www.CWmusicmedia.com",
      availableJobs: 2,
      contactPerson: "Mariam Adesokan",
      contactRole: "Chief Operations Officer",
      contactPhone: "07063480982",
      contactEmail: "mimoadesokan@gmail.com",
      address: "17 Azeez Aina Street off Olusanya bus stop, MKO Abiola Way, Ibadan, Nigeria",
      rolesOffered: "Administrative/Operations, Customer Service",
      keySkills: "Networking and human relations",
      conductingInterviews: true,
      needsBoothSpace: false,
      needsHRSupport: true,
      description: "CW Music Media is a company that focuses on educating people of all ages in musical literacy with the best of experienced tutors and professional equipment.",
      credentials: []
    },
    {
      id: 5,
      name: "Faven Tresses",
      logo: "https://via.placeholder.com/120/FF69B4/FFFFFF?text=FT",
      industry: "Fashion",
      type: "Direct Employer",
      location: "Ilorin, Kwara State",
      employees: "1 - 10",
      website: "",
      availableJobs: 8,
      contactPerson: "Favour Anyanwu",
      contactRole: "General Manager",
      contactPhone: "07019159965",
      contactEmail: "Chmfavor@gmail.com",
      address: "Tipper garage, Tanke, Ilorin",
      rolesOffered: "Graduate Trainee, Customer Service, Creative/Design, Hair stylists, Barbers, Nail Tech, Makeup artists, Pedicurist, Frontal stylists",
      keySkills: "1. Must be proficient in Stitch braids and other braids styles. 2. A professional Barber with at least 1 year experience. 3. A Professional nail technician with the right degree of creativity. 4. A professional makeup artist",
      conductingInterviews: true,
      needsBoothSpace: true,
      needsHRSupport: true,
      description: "Faven Tresses is a modern unisex salon dedicated to redefining beauty with elegance and confidence. Our team provides professional hair and beauty services which includes wig revamps, stylish braids, pedicures, nail care, and men's grooming. We work in a serene and comfortable environment that inspires creativity. We cater to women who value quality, style, and the confidence that comes from looking their best. At Faven Tresses, every visit is more than a service, it's a transformation.",
      credentials: []
    },
    {
      id: 6,
      name: "UtopiaBFS",
      logo: "https://via.placeholder.com/120/9370DB/FFFFFF?text=UBFS",
      industry: "Beauty & Spa",
      type: "Direct Employer",
      location: "Ilorin, Kwara State",
      employees: "11 - 50",
      website: "",
      availableJobs: 5,
      contactPerson: "Okewunmi",
      contactRole: "Manager",
      contactPhone: "09037467343",
      contactEmail: "utopiabfs@gmail.com",
      address: "Flower Garden branch, 12 Mahogany street, Off Adelodun road, GRA, Ilorin",
      rolesOffered: "Administrative/Operations",
      keySkills: "Interpersonal skill",
      conductingInterviews: false,
      needsBoothSpace: false,
      needsHRSupport: true,
      description: "UtopiaBFS is a wellness-focused business offering a blend of beauty, spa and fitness services designed to promote relaxation, rejuvenation, and healthy living.",
      credentials: []
    },
    {
      id: 7,
      name: "OTEO",
      logo: "https://via.placeholder.com/120/FF6347/FFFFFF?text=OTEO",
      industry: "Fashion",
      type: "Direct Employer",
      location: "Ilorin, Kwara State",
      employees: "1 - 10",
      website: "https://www.instagram.com/oteo.ng",
      availableJobs: 2,
      contactPerson: "Oyeniran Tofunmi",
      contactRole: "CEO",
      contactPhone: "09075789375",
      contactEmail: "shopoteo@gmail.com",
      address: "Alao farms, Tanke, Ilorin, Kwara State",
      rolesOffered: "Tailors",
      keySkills: "Experienced tailors that would handle sewing, I don't want a complete beginner",
      conductingInterviews: true,
      needsBoothSpace: true,
      needsHRSupport: false,
      description: "Shop Oteo is a women's wear brand dedicated to creating elegant, timeless, and finely crafted fashion pieces. We specialize in custom dresses, Aso Ebi, and corporate prints, bringing every woman's unique style and personality to life through exquisite tailoring and attention to detail. At Shop Oteo, we believe every outfit should make you feel confident, beautiful, and unforgettable. Whether it's a special event, a corporate setting, or a personal style moment, our designs are made to fit perfectly, flatter effortlessly, and stand out gracefully. With a passion for creativity and a commitment to quality, we work closely with our clients to ensure that every piece is tailored to their exact needs because fashion should be personal, expressive, and made just for you.",
      credentials: []
    },
    {
      id: 8,
      name: "Experience Vision Creations (EVC)",
      logo: "https://via.placeholder.com/120/4169E1/FFFFFF?text=EVC",
      industry: "Construction/Real Estate",
      type: "Direct Employer",
      location: "Ilorin, Kwara State",
      employees: "11 - 50",
      website: "https://www.evcng.com",
      availableJobs: 5,
      contactPerson: "Hikmat Eneze",
      contactRole: "Customer Experience Personnel",
      contactPhone: "07082938870",
      contactEmail: "contactevcng@gmail.com",
      address: "Plot 7A, Bodunde street, Adelodun road, Basin area Ilorin, Kwara State",
      rolesOffered: "Entry-Level Roles, Graduate Trainee, Sales and Marketing",
      keySkills: "Great Communication Skills",
      conductingInterviews: false,
      needsBoothSpace: true,
      needsHRSupport: false,
      description: "Experience Vision Creations (EVC) is a Nigerian real estate and construction company focused on providing affordable housing and investment opportunities through strategic property development, land banking, and expert consultancy.",
      credentials: []
    },
    {
      id: 9,
      name: "St.Rina Creamery and Bakery Confectioneries",
      logo: "https://via.placeholder.com/120/FFD700/000000?text=SRC",
      industry: "Food and Beverages",
      type: "Direct Employer",
      location: "Ilorin, Kwara State",
      employees: "1 - 10",
      website: "https://www.facebook.com/share/16XLKw6LSs/",
      availableJobs: 1,
      contactPerson: "Chef Suliyat",
      contactRole: "Operation Manager",
      contactPhone: "09010804194",
      contactEmail: "abass.suliyat95@gmail.com",
      address: "Adjacent University of Ilorin clinic, PS, University of Ilorin",
      rolesOffered: "Entry-Level Roles",
      keySkills: "At least O'level certificate",
      conductingInterviews: true,
      needsBoothSpace: false,
      needsHRSupport: true,
      description: "A homemade brand that serves sweet treats and delivers home cooked meals.",
      credentials: []
    }
  ]

  // Filter companies based on search query
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Company Modal Component
  const CompanyModal = ({ company, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl z-10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <FiX className="w-6 h-6 text-gray-500" />
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-2 border-gray-100 flex items-center justify-center bg-gray-50">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Company Info */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{company.name}</h2>
                <p className="text-orange-600 font-semibold mb-3">{company.industry}</p>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <FiMapPin className="w-4 h-4" />
                  <span>{company.location}</span>
                </div>
                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    <FiGlobe className="w-4 h-4" />
                    Visit Website
                    <FiExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Company Details Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600 text-sm mb-1">Industry</p>
                <p className="font-semibold text-gray-900">{company.industry}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600 text-sm mb-1">Type</p>
                <p className="font-semibold text-gray-900">{company.type}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-600 text-sm mb-1">Employees</p>
                <p className="font-semibold text-gray-900">{company.employees}</p>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">About {company.name}</h3>
              <p className="text-gray-700 leading-relaxed">{company.description}</p>
            </div>

            {/* Contact Information */}
            {company.contactPerson && (
              <div className="mb-6 bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Contact Person:</span> {company.contactPerson}</p>
                  <p><span className="font-semibold">Role:</span> {company.contactRole}</p>
                  <p><span className="font-semibold">Phone:</span> {company.contactPhone}</p>
                  <p><span className="font-semibold">Email:</span> {company.contactEmail}</p>
                  {company.address && <p><span className="font-semibold">Address:</span> {company.address}</p>}
                </div>
              </div>
            )}

            {/* Job Opportunities */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Opportunities</h3>
              {company.availableJobs > 0 ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <FiBriefcase className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{company.availableJobs} Open Position{company.availableJobs > 1 ? 's' : ''}</p>
                      <p className="text-sm text-gray-600">Currently hiring for multiple roles</p>
                    </div>
                  </div>
                  
                  {company.rolesOffered && (
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Roles Available:</p>
                      <p className="text-gray-700">{company.rolesOffered}</p>
                    </div>
                  )}
                  
                  {company.keySkills && (
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Required Skills:</p>
                      <p className="text-gray-700">{company.keySkills}</p>
                    </div>
                  )}
                  
                  {company.conductingInterviews && (
                    <div className="flex items-center gap-2 text-green-700 bg-green-100 px-3 py-2 rounded-lg mt-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Conducting interviews during HireGround 2025</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-gray-600">
                    {company.name} is not currently hiring. Check back soon for updates or contact them directly for future opportunities.
                  </p>
                </div>
              )}
            </div>

            {/* Professional Credentials */}
            {company.credentials && company.credentials.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Professional associations and credentials</h3>
                <div className="space-y-3">
                  {company.credentials.map((credential, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src="https://via.placeholder.com/48/008000/FFFFFF?text=CAC"
                          alt={credential.name}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{credential.name}</p>
                        <p className="text-sm text-gray-600">{credential.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                  Companies hiring & <span className="text-yellow-300">top employers</span> in Nigeria
                </h1>
                <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                  Explore opportunities with Nigeria's leading companies partnered with HireGround to connect talent with careers.
                </p>
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <FiBriefcase className="w-5 h-5" />
                  <span className="text-2xl font-bold text-yellow-300">{companies.filter(c => c.availableJobs > 0).length}</span>
                  <span>Companies actively hiring</span>
                  <span className="mx-2">•</span>
                  <span className="text-2xl font-bold text-yellow-300">{companies.reduce((sum, c) => sum + c.availableJobs, 0)}</span>
                  <span>Total open positions</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search companies or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredCompanies.map((company, index) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onClick={() => setSelectedCompany(company)}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group border border-gray-100"
                >
                  {/* Company Logo */}
                  <div className="relative h-32 bg-gray-50 flex items-center justify-center p-6 group-hover:bg-gray-100 transition-colors">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Company Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {company.name}
                    </h3>
                    
                    <p className="text-sm text-orange-600 font-semibold mb-3 line-clamp-1">
                      {company.industry}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <FiMapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="line-clamp-1">{company.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <FiUsers className="w-4 h-4 flex-shrink-0" />
                        <span>{company.employees}</span>
                      </div>
                    </div>

                    {/* Available Jobs Badge */}
                    <div className={`text-sm font-semibold ${
                      company.availableJobs > 0 
                        ? 'text-green-700 bg-green-50' 
                        : 'text-gray-600 bg-gray-100'
                    } px-3 py-2 rounded-lg`}>
                      {company.availableJobs > 0 
                        ? `${company.availableJobs} Available Job${company.availableJobs > 1 ? 's' : ''}`
                        : 'No jobs available'
                      }
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredCompanies.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiSearch className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No companies found</h3>
                <p className="text-gray-600">Try adjusting your search terms or browse all companies</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>

      {/* Company Details Modal */}
      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
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

export default CompaniesHiring
