import React from 'react'
import CountdownTicket from '../CountdownTicket'
import { EVENT_DATE } from '../../data/event'

// The countdown ticket as an in-page section. Disappears once the event starts.
// tone="white" for pages where the section above is already mist.
const CountdownSection = ({ tone = 'mist' }) => {
  if (Date.now() >= EVENT_DATE) return null

  return (
    <section aria-labelledby="countdown-section-title" className={`${tone === 'white' ? 'bg-white' : 'bg-mist'} py-16 lg:py-24`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <CountdownTicket titleId="countdown-section-title" />
      </div>
    </section>
  )
}

export default CountdownSection
