import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMail, FiPhone, FiDownload, FiCheck, FiClock, FiUsers, FiShoppingBag, FiCopy } from 'react-icons/fi'

const SponsorCta = () => {
  const [hoveredButton, setHoveredButton] = useState(null)

  const [copied, setCopied] = useState(false)

  const sponsorMailto = `mailto:hireground@thelightutors.com?subject=${encodeURIComponent(
    'HireGround 2026 - Sponsorship Inquiry'
  )}&body=${encodeURIComponent(
    `Hello HireGround Team,

I am writing to inquire about sponsorship opportunities for HireGround 2026.

Organization / Brand Name: 
Contact Person: 
Phone Number: 
Target Sponsorship Tier / Interests: 
Key Goals (e.g., Brand Visibility, Talent Recruitment, CSR): 

Please share the official sponsorship deck and available tiers with us.

Best regards,`
  )}`

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

  // Urgency indicators
  const urgencyPoints = [
    { icon: <FiClock className="w-4 h-4" />, text: "Limited sponsorship & stage slots available" },
    { icon: <FiUsers className="w-4 h-4" />, text: "1,000+ In-person & 10,000+ Virtual Audience" },
    { icon: <FiCheck className="w-4 h-4" />, text: "Flexible speaking durations tailored to budget" }
  ]

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Unique background with geometric pattern */}
      <div className="absolute inset-0 bg-orange-600">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: 0,
              ease: "linear"
            }}
            className="hidden"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: 0,
              ease: "linear"
            }}
            className="hidden"
          />
          <motion.div
            animate={{ 
              y: [-20, 20, -20]
            }}
            transition={{ 
              duration: 6,
              repeat: 0,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-lg rotate-45"
          />
        </div>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Attention-grabbing badge */}
            <p className="text-gold font-semibold mb-6">Partnership & Exhibition Inquiries Open</p>

            {/* Compelling headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Don't Just Watch.
              <br />
              Take Center Stage.
            </h2>

            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join the brands and leaders who are transforming Nigeria's professional landscape. 
              Whether sponsoring or exhibiting on the main stage, your impact starts here.
            </p>

            {/* Urgency indicators */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 text-white/90 text-sm">
              {urgencyPoints.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-gold">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons with unique design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-8"
          >
            {/* Primary CTA - Become a Sponsor */}
            <motion.a
              href={sponsorMailto}
              onHoverStart={() => setHoveredButton('sponsor')}
              onHoverEnd={() => setHoveredButton(null)}
              className="group relative inline-flex items-center justify-center px-8 py-5 bg-white text-orange-600 font-bold rounded-md overflow-hidden transition-all duration-300 text-base sm:text-lg"
            >
              <div className="relative flex items-center">
                <FiMail className="w-5 h-5 mr-3 text-orange-600 transition-transform" />
                <span>Become a Sponsor</span>
              </div>
            </motion.a>

            {/* Secondary CTA - Exhibition & Speaking Slot */}
            <motion.a
              href={exhibitorMailto}
              onHoverStart={() => setHoveredButton('exhibit')}
              onHoverEnd={() => setHoveredButton(null)}
              className="group relative inline-flex items-center justify-center px-8 py-5 bg-night-deep border-2 border-white/40 text-white font-bold rounded-md overflow-hidden transition-all duration-300 text-base sm:text-lg hover:border-white"
            >
              <div className="relative flex items-center">
                <FiShoppingBag className="w-5 h-5 mr-3 text-gold transition-transform" />
                <span>Exhibition & Stage Slot</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Quick Copy Email Widget */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-black/30 border border-white/20 rounded-xl text-sm text-white/90">
            <span>Official Email:</span>
            <span className="font-semibold text-gold">hireground@thelightutors.com</span>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 hover:bg-white/20 rounded-lg text-white transition-all ml-1"
              title="Copy email to clipboard"
            >
              {copied ? <FiCheck className="w-4 h-4 text-gold" /> : <FiCopy className="w-4 h-4" />}
            </button>
            {copied && <span className="text-xs text-gold font-medium">Copied!</span>}
          </div>

          {/* Final compelling statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-lg text-white/80 italic">
              "The best time to partner with HireGround was yesterday. The second best time is right now."
            </p>
          </motion.div>

        </div>
      </div>

      {/* Floating action elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: 0, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="w-4 h-4 bg-gold rounded-full"></div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: 0, ease: "easeInOut" }}
        className="absolute top-20 left-10 hidden lg:block"
      >
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
      </motion.div>
    </section>
  )
}

export default SponsorCta