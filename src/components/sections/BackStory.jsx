import React from 'react';
import { HiCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import hiregroundimg from "../../assets/images/hireground.jpg"

const skills = [
  "Interview etiquette",
  "CV & cover letter writing",
  "Workplace skills",
  "Career readiness"
];

const features = [
  "Gain Real Employability Skills.",
  "Meet Top Employers and Recruiters.",
  "Unlock Career Opportunities."
];

const stats = [
  { value: "500+", label: "Young Nigerians", note: "To Be Empowered" },
  { value: "6h", label: "Intensive Training", note: "Skills & Networking" },
  { value: "1", label: "Movement", note: "Nationwide Impact" },
];

const BackStory = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title max-w-3xl mb-14 lg:mb-20">
          The Story Behind HireGround
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Story */}
          <div className="lg:col-span-7">
            <blockquote className="border-l-4 border-ember pl-6 mb-10">
              <p className="text-2xl sm:text-3xl font-bold leading-snug text-ink" style={{ fontStretch: '110%' }}>
                “From One Conversation to 500 Careers”
              </p>
            </blockquote>

            <div className="space-y-6 text-lg leading-relaxed text-ink/85">
              <p>
                It began with a single encounter, a young lady who thought she had ruined her interview because she didn't ask a single question. That moment revealed something bigger: countless young Nigerians are stepping into interviews unprepared, not because they lack talent, but because they've never been taught how to show up.
              </p>
              <p>
                At The Light Tutors, we've seen it all, candidates logging in from noisy buses, interviews taken in pyjamas, some even joining from a football pitch. It's not a lack of potential. It's a lack of preparation.
              </p>
              <p className="text-2xl font-bold text-ember-deep">
                That's why we created HireGround.
              </p>
              <p>
                What started as a small training idea grew into a massive success last year. Now, we are building on that momentum. HireGround 2026 is designed to be bigger and better, aiming to empower even more young Nigerians with the skills they need to land jobs and thrive at work:
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 my-8">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 py-3 border-b border-line text-lg font-medium">
                  <span className="flex items-center justify-center w-6 h-6 rounded bg-ember text-ink shrink-0">
                    <HiCheck className="w-4 h-4" />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>

            <div className="bg-night text-white rounded-lg p-8">
              <p className="text-lg mb-2">This is more than an event. It's a launchpad.</p>
              <p className="text-3xl font-extrabold text-gold mb-1" style={{ fontStretch: '118%' }}>HireGround 2026</p>
              <p className="text-lg text-white/85">Ready. Set. Your Career Starts Here.</p>
            </div>
          </div>

          {/* Photo and highlights */}
          <div className="lg:col-span-5 space-y-8">
            <figure>
              <img
                src={hiregroundimg}
                alt="Attendees at HireGround 2025 in Ilorin"
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
              <figcaption className="mt-3 text-sm text-muted">
                HireGround in Action. Empowering careers, transforming futures.
              </figcaption>
            </figure>

            <div className="bg-ember rounded-lg p-8 text-ink">
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-6">
                Ready, set, your career starts here
              </h3>
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-lg font-medium">
                    <HiCheck className="w-6 h-6 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn w-full bg-ink text-white hover:bg-night">
                Learn More About HireGround
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <dl className="grid grid-cols-1 sm:grid-cols-3 mt-20 lg:mt-28 border-t border-ink">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`pt-8 pb-4 sm:pr-8 ${i > 0 ? 'sm:pl-8 sm:border-l border-line' : ''}`}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-5xl lg:text-6xl font-extrabold text-ink mb-3" style={{ fontStretch: '118%' }}>{stat.value}</dd>
              <dd className="text-lg font-semibold">{stat.label}</dd>
              <dd className="text-muted">{stat.note}</dd>
            </div>
          ))}
        </dl>

        {/* Community */}
        <div className="mt-20 lg:mt-28 bg-mist rounded-lg p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5" style={{ fontStretch: '115%' }}>
              Join the Community
            </h3>
            <p className="lede max-w-none">
              This isn't just another career fair. It's a community to ensure no young Nigerian
              walks into an interview unprepared or leaves university without the skills
              employers demand. Together, we're building the future workforce Nigeria deserves.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-ember-deep font-semibold text-lg mb-4">Ready to transform your future?</p>
            <a
              href="https://chat.whatsapp.com/BuHVOhdeJ7102pGFtBTFjb?mode=wwt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-8"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackStory;
