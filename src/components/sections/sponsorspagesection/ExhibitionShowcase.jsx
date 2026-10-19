import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FiMic, 
  FiShoppingBag, 
  FiClock, 
  FiUsers, 
  FiCheckCircle, 
  FiArrowRight, 
  FiDollarSign, 
  FiTv, 
  FiTrendingUp,
  FiMail,
  FiCopy,
  FiCheck
} from 'react-icons/fi'

const ExhibitionShowcase = () => {
  const [copied, setCopied] = useState(false)

  const exhibitorMailto = `mailto:hireground@thelightutors.com?subject=${encodeURIComponent(
    'HireGround 2026 - Exhibition & Stage Speaking Inquiry'
  )}&body=${encodeURIComponent(
    `Hello HireGround Team,

We would like to inquire about securing an exhibition booth and a stage speaking/presentation slot at HireGround 2026.

Organization / Business Name: 
Contact Person: 
Phone Number: 
Products / Services to Exhibit: 
Preferred Speaking / Presentation Duration (Negotiable, e.g., 5 mins, 10 mins, custom): 
Special Requirements (e.g., AV / Projector display, power supply, specific booth size): 

Please share the pricing options and booth details with us.

Best regards,`
  )}`

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hireground@thelightutors.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const boothPerks = [
    {
      icon: <FiShoppingBag className="w-6 h-6" />,
      title: "Prime Exhibition Booth",
      description: "Dedicated branded table and booth setup in our high-traffic exhibition hall, ensuring constant attendee interaction throughout the event."
    },
    {
      icon: <FiMic className="w-6 h-6" />,
      title: "Main Stage Speaking Slot",
      description: "Take the main stage with a dedicated presentation/pitch slot. Duration is negotiable and flexible to accommodate your live product demos or brand message."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Direct Access to 500+ Buyers & Talent",
      description: "Sell products on-site, onboard new users, distribute brochures, and generate qualified leads from an ambitious professional audience."
    },
    {
      icon: <FiTv className="w-6 h-6" />,
      title: "Live AV & Digital Screen Integration",
      description: "Showcase video promos, interactive demos, or slide decks on high-definition projector screens during your stage spotlight."
    }
  ]

  const includedFeatures = [
    "Dedicated booth space (tables, chairs & branding area)",
    "Official speaking/pitch time on the main event program",
    "Negotiable presentation duration tailored to your budget",
    "Audio/visual support for slide decks & product walkthroughs",
    "Logo & company profile featured in attendee event guides",
    "Direct on-site selling and instant customer onboarding",
    "Social media & digital newsletter mentions before the event",
    "Exhibitor VIP access passes for your on-ground team"
  ]

  return (
    <section id="exhibition" className="relative py-20 lg:py-28 bg-night-deep text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden absolute top-1/4 -left-40 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"></div>
        <div className="hidden absolute bottom-1/4 -right-40 w-96 h-96 bg-red-500/15 rounded-full blur-3xl"></div>
        <div 
          className="absolute inset-0 opacity-5"
          style={{ display: 'none' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
        >

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Exhibit Your Brand. <br className="hidden sm:inline" />
            
              Own the Stage.
            
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just set up a booth—command the entire room. Secure a prime exhibition space to showcase and sell your products, coupled with a <strong>dedicated speaking/pitch slot</strong> on the main stage.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm">
            <FiClock className="w-4 h-4" />
            <span>Speaking duration is flexible & negotiable based on your goals and budget</span>
          </div>
        </motion.div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {boothPerks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-orange-500/40 rounded-lg p-6 transition-all duration-300 group"
            >
              <div className="w-14 h-14 text-orange-400 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-ink transition-all duration-300">
                {perk.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {perk.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Box + Direct Inquiry Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-white/15 rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: What You Get List */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">What's in the Exhibition Package</h3>
                  <p className="text-sm text-gray-400">Everything you need for maximum brand ROI</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {includedFeatures.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-sm text-orange-200">
                <p>
                  <strong>Note on Program Speaking Slots:</strong> Stage presentation slots are limited to maintain high audience engagement. Time allocations (e.g. 5, 10, or 15 minutes) are customized and quoted based on your brand requirements.
                </p>
              </div>
            </div>

            {/* Right: Action Card */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-orange-500/30 text-orange-300 text-xs font-bold rounded-full mb-4">
                  Reserve Your Spot
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Ready to Exhibit & Present?
                </h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Send us an email with your organization details and desired speaking duration. Our partnerships team will respond promptly with pricing packages and floor layout options.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href={exhibitorMailto}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-600 text-white font-bold rounded-md hover:shadow-orange-500/40 transition-all text-base sm:text-lg"
                >
                  <FiMail className="w-5 h-5" />
                  <span>Send Exhibition Inquiry</span>
                </motion.a>

                <div className="flex items-center justify-between p-3.5 bg-black/40 border border-white/10 rounded-xl text-xs sm:text-sm">
                  <span className="text-gray-400 truncate mr-2">
                    hireground@thelightutors.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 transition-colors flex-shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="w-4 h-4 text-gold" />
                        <span className="text-gold font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="w-4 h-4" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ExhibitionShowcase
