import React from 'react'
import { FiUsers, FiCalendar, FiTrendingUp, FiStar } from 'react-icons/fi'
import PageHero from '../../PageHero'
import sponsorshero from '../../../assets/images/hero2.jpg' // event photo; the previous stock image was sponsorshero.jpg

const SponsorsSectionHero = () => {
  // Placeholder for background image - replace with your image import
  const heroBackgroundImage = sponsorshero

  // Background placeholder component
  const BackgroundPlaceholder = () => (
    <div className="absolute inset-0 bg-orange-50">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 text-orange-300">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-orange-400 font-medium">Background Image Placeholder</p>
        </div>
      </div>
    </div>
  )

  // Event statistics for credibility
  const eventStats = [
    { icon: <FiUsers className="w-5 h-5" />, number: "1000+", label: "Expected Attendees" },
    { icon: <FiCalendar className="w-5 h-5" />, number: "2", label: "Days of Networking" },
    { icon: <FiTrendingUp className="w-5 h-5" />, number: "50+", label: "Industry Leaders" },
    { icon: <FiStar className="w-5 h-5" />, number: "100+", label: "Companies Participating" }
  ]

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

  return (
    <PageHero
      kicker="HireGround 2026 Partnerships & Exhibitions"
      title="Partner with HireGround"
      intro={<>Sponsor or exhibit on the big stage. Connect with 1,000+ ambitious on-site professionals and 10,000+ virtual attendees across Nigeria. Sponsor the movement or book an <strong className="text-white">exhibition booth with a dedicated stage speaking/pitch slot</strong>.</>}
      image={heroBackgroundImage}
      imageAlt="Attendees at HireGround 2025"
    >
      <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-white/90">
        {['Event Sponsorship', 'Exhibition Booths', 'Stage Speaking Slots', 'Talent Acquisition'].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-sun"></span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3 mb-8">
        <a href={sponsorMailto} className="btn btn-primary text-lg px-8 py-4">
          Become a Sponsor
        </a>
        <a href="#exhibition" className="btn btn-on-dark text-lg px-8 py-4">
          Exhibition & Stage Slot
        </a>
      </div>

      <p className="text-white/75">
        Direct inquiries:{' '}
        <a href="mailto:hireground@thelightutors.com" className="text-white font-semibold underline underline-offset-4 hover:text-sun">
          hireground@thelightutors.com
        </a>
      </p>
    </PageHero>
  )
}

export default SponsorsSectionHero
