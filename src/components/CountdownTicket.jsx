import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { EVENT_DATE, REGISTER_URL } from '../data/event'

const getTimeLeft = () => {
  const distance = Math.max(0, EVENT_DATE - Date.now())
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance % 86400000) / 3600000),
    minutes: Math.floor((distance % 3600000) / 60000),
    seconds: Math.floor((distance % 60000) / 1000),
  }
}

// One digit group that rolls when its value changes.
const Unit = ({ value, label }) => {
  const text = String(value).padStart(2, '0')
  return (
    <div>
      <div className="relative h-[1em] overflow-hidden text-5xl sm:text-7xl font-extrabold leading-none tabular-nums" style={{ fontStretch: '115%' }}>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            key={text}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="block"
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="mt-3 text-sm font-semibold">{label}</p>
    </div>
  )
}

// The HireGround countdown as an admission ticket: orange body with the
// countdown, perforated seam, black stub with date, venue and registration.
// Used by the pop-up (pass onClose to get close controls) and by the page section.
const CountdownTicket = ({ titleId, onClose, closeRef }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ]

  return (
    <div className="relative w-full flex flex-col md:flex-row">
      {/* Ticket body */}
      <div className="ticket-main relative bg-ember text-ink rounded-t-lg md:rounded-tr-none md:rounded-l-lg p-7 sm:p-10 md:flex-1">
        {onClose && (
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close countdown"
            className="absolute top-4 right-4 md:hidden w-10 h-10 rounded-md flex items-center justify-center hover:bg-ink hover:text-white transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}

        <p className="font-semibold mb-3">The Light Tutors presents</p>
        <h2 id={titleId} className="text-4xl sm:text-5xl mb-2">
          HireGround Career Fair
        </h2>
        <p className="text-lg font-medium mb-10">The Employability Revolution</p>

        <div className="grid grid-cols-4 gap-3 sm:gap-6 border-t-2 border-ink pt-6" aria-hidden="true">
          {units.map((unit) => (
            <Unit key={unit.label} {...unit} />
          ))}
        </div>
        <p className="sr-only">
          {timeLeft.days} days, {timeLeft.hours} hours and {timeLeft.minutes} minutes until HireGround Career Fair.
        </p>
      </div>

      {/* Perforation */}
      <div className="relative z-10" aria-hidden="true">
        <div className="ticket-perforation" />
      </div>

      {/* Stub */}
      <div className="ticket-stub relative bg-ink text-white rounded-b-lg md:rounded-bl-none md:rounded-r-lg p-7 sm:p-8 md:w-72 flex flex-col">
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close countdown"
            className="hidden md:flex absolute top-4 right-4 w-10 h-10 rounded-md items-center justify-center text-white/80 hover:bg-white hover:text-ink transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}

        <p className="text-gold font-semibold mb-6">Admit one</p>

        <dl className="space-y-5 mb-8">
          <div>
            <dt className="text-sm text-white/60">Date</dt>
            <dd className="text-xl font-bold">31st October 2026</dd>
          </div>
          <div>
            <dt className="text-sm text-white/60">Venue</dt>
            <dd className="text-xl font-bold">Ilorin Innovation Hub</dd>
          </div>
        </dl>

        <div className="mt-auto space-y-3">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn btn-primary w-full text-lg"
          >
            Register Now
          </a>
          {onClose && (
            <button
              onClick={onClose}
              className="w-full py-2 text-white/70 hover:text-white underline underline-offset-4"
            >
              Maybe later
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountdownTicket
