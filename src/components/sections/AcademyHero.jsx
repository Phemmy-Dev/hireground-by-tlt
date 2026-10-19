import React from 'react'
import { HiAcademicCap, HiClock, HiGlobe } from 'react-icons/hi'
import PageHero from '../PageHero'
import academyherobg from '../../assets/images/academyherobg.jpeg'

const AcademyHero = () => {
  const stats = [
    { icon: HiClock, value: '6 Weeks', label: 'Program Duration' },
    { icon: HiAcademicCap, value: '20', label: 'Participants' },
    { icon: HiGlobe, value: '100%', label: 'Virtual' },
  ]

  return (
    <PageHero
      kicker="Cohort 1 was a huge success"
      title="HireGround Academy"
      intro="A 6-week employability and skills development program designed to prepare early-career professionals and graduates for the job market. Our first cohort successfully concluded, empowering participants with essential skills."
      image={academyherobg}
      imageAlt="HireGround Academy participants"
    >
      <div className="flex flex-wrap gap-3 mb-10">
        <span
          aria-disabled="true"
          className="btn text-lg px-8 py-4 bg-white/15 text-white/70 cursor-not-allowed"
        >
          <HiAcademicCap className="w-5 h-5" />
          Applications Closed
        </span>
        <a href="#learn-more" className="btn btn-on-dark text-lg px-8 py-4">
          Learn More
        </a>
      </div>

      <dl className="grid grid-cols-3 border-t border-white/30 max-w-xl">
        {stats.map((stat) => (
          <div key={stat.label} className="pt-5 pr-4">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="flex items-center gap-2 text-white font-bold text-xl">
              <stat.icon className="w-5 h-5 text-sun" />
              {stat.value}
            </dd>
            <dd className="text-white/70 text-sm mt-1">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </PageHero>
  )
}

export default AcademyHero
