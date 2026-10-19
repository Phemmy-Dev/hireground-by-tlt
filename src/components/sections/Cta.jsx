import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <section className="bg-ember text-ink py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl leading-relaxed max-w-2xl">
            Join industry leaders and career changers at HireGround 2026. Secure your spot today and unlock exclusive networking opportunities.
          </p>
          <p className="mt-6 font-semibold flex flex-wrap gap-x-6 gap-y-1">
            <span>1000+ Attendees Expected</span>
            <span>10+ Industry Speakers</span>
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
          <a
            href="https://trankets.com/invite/hireground-kwara-career-fair-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-ink text-white hover:bg-forest text-lg px-8 py-4"
          >
            Register Now
          </a>
          <Link to="/about" className="btn btn-secondary text-lg px-8 py-4">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
