import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Logo from '../assets/images/logo-white.png'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Speakers', path: '/speakers' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'Contact', path: '/contact' },
]

const NotFound = () => {
  return (
    <div className="min-h-screen bg-night text-white flex flex-col">
      <header className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="inline-block">
          <img src={Logo} alt="HireGround home" className="h-8 w-auto" />
        </Link>
      </header>

      <main className="flex-1 flex items-center">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gold text-[7rem] sm:text-[10rem] lg:text-[13rem] font-extrabold leading-none mb-6" style={{ fontStretch: '125%' }}>
            404
          </p>
          <h1 className="text-4xl sm:text-5xl mb-5">Oops! Page Not Found</h1>
          <p className="text-xl text-white/80 max-w-xl mb-10">
            Looks like you've wandered off the career path. Every career journey has its detours. Let's get you back on track!
          </p>

          <div className="flex flex-wrap gap-3 mb-14">
            <Link to="/" className="btn btn-primary text-lg px-8 py-4">
              Take Me Home
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-on-dark text-lg px-8 py-4">
              <FiArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          <h2 className="text-lg font-bold mb-4" style={{ fontStretch: '100%', letterSpacing: 0 }}>
            Or explore these popular pages:
          </h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-white/80 underline underline-offset-4 hover:text-gold">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default NotFound
