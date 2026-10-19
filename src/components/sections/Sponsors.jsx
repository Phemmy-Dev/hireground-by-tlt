import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiMail, 
  FiAward, 
  FiShoppingBag, 
  FiMic, 
  FiClock, 
  FiCheckCircle, 
  FiCopy, 
  FiCheck
} from 'react-icons/fi'
import tltsponsorlogo from '../../assets/images/sponsors/tltsponsor.png'
import kwgovtlogo from '../../assets/images/sponsors/kwgovlogo.webp'
import INeedAGoodTeamLogo from '../../assets/images/sponsors/ineedagoodteamlogo.jpg'
import Mindshiftlogo from '../../assets/images/sponsors/mindshiftlogo.png'
import anchor from '../../assets/images/sponsors/anchor.png'
import cw from '../../assets/images/sponsors/cw.png'
import swoop from '../../assets/images/sponsors/swoop.png'
import equipr from '../../assets/images/sponsors/equipr.jpg'

const Sponsors = () => {
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

  const partners = [
    { id: 1, name: 'The Light Tutors', logo: tltsponsorlogo, isReal: true },
    { id: 2, name: 'Kwara State Government', logo: kwgovtlogo, isReal: true },
    { id: 3, name: 'Mindshift', logo: Mindshiftlogo, isReal: true },
    { id: 4, name: 'I Need A Good Team', logo: INeedAGoodTeamLogo, isReal: true },
    { id: 5, name: 'Equipr', logo: equipr, isReal: true },
    { id: 6, name: 'Swoop', logo: swoop, isReal: true },
  ]

  return (
    <section className="bg-forest text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="section-title !text-white mb-6">
            Partner with HireGround 2026
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
            Position your organization at the center of career transformation. Choose between
            <strong className="text-white"> official event sponsorship</strong> for brand prestige or an
            <strong className="text-white"> exhibition booth + main stage speaking slot</strong> to pitch live to over 1,000 in-person attendees.
          </p>
        </div>

        {/* Two partnership tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">

          {/* Track 1: Event Sponsorship */}
          <div className="bg-white text-ink rounded-lg p-8 sm:p-10 flex flex-col">
            <p className="flex items-center gap-2 text-sm font-semibold text-ember-deep mb-4">
              <FiAward className="w-4 h-4" />
              Corporate & Brand Impact
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Become an Official Sponsor
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Align your organization with youth empowerment and economic mobility. Reach over 1,000 on-site professionals and 10,000+ virtual attendees with premier brand positioning and direct graduate recruitment channels.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Prominent logo branding across all stages, banners & digital streams",
                "VIP recognition & media coverage in pre/post event press",
                "Direct access to vetted job seeker and graduate resume repository",
                "Customized sponsorship tiers & CSR impact reporting"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-ember-deep shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 border-t border-line flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href={sponsorMailto} className="btn btn-primary">
                <FiMail className="w-5 h-5" />
                Inquire for Sponsorship
              </a>
              <Link to="/sponsors" className="font-semibold text-ember-deep underline underline-offset-4 hover:text-ink">
                Explore full sponsorship overview & deck
              </Link>
            </div>
          </div>

          {/* Track 2: Exhibition & Stage Spotlight */}
          <div className="bg-forest-deep border border-white/15 rounded-lg p-8 sm:p-10 flex flex-col">
            <p className="flex items-center gap-2 text-sm font-semibold text-sun mb-4">
              <FiMic className="w-4 h-4" />
              Live Demos & Direct Sales
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Exhibition Booth + Stage Time
            </h3>
            <p className="text-white/75 leading-relaxed mb-6">
              Showcase your products directly to a packed room of career-focused professionals. Secure a dedicated exhibition booth space plus <strong className="text-white">official speaking/presentation time</strong> on the main stage to pitch your solutions.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Dedicated branded exhibition booth in the high-traffic showcase zone",
                "Dedicated speaking/pitch slot on the main event stage (flexible time)",
                "Live on-stage demo or video playback on the main conference screens",
                "Direct on-site selling, user onboarding & qualified lead capture"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-sun shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-2 text-sm text-white/70 mb-8">
              <FiClock className="w-4 h-4 shrink-0" />
              Speaking duration is flexible & negotiable based on your budget
            </p>
            <div className="mt-auto pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href={exhibitorMailto} className="btn bg-sun text-ink hover:bg-white">
                <FiShoppingBag className="w-5 h-5" />
                Book Exhibition & Stage Slot
              </a>
              <Link to="/sponsors#exhibition" className="font-semibold text-white underline underline-offset-4 hover:text-sun">
                Learn about exhibition packages & requirements
              </Link>
            </div>
          </div>
        </div>

        {/* Direct email */}
        <div className="flex flex-wrap items-center gap-3 text-white/80 mb-16">
          <span>Direct Inquiries:</span>
          <a href="mailto:hireground@thelightutors.com" className="font-semibold text-white underline underline-offset-4 hover:text-sun">
            hireground@thelightutors.com
          </a>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-white/30 hover:bg-white hover:text-forest transition-colors"
          >
            {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        {/* Confirmed partners */}
        <div className="bg-white rounded-lg p-8 sm:p-10">
          <h3 className="text-lg font-bold text-ink mb-8">
            Proudly Supported & Partnered By Leading Brands
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="h-16 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Join leading organizations and high-growth brands at HireGround 2026.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Sponsors
