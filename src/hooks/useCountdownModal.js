import { useState, useEffect, useCallback } from 'react'
import { EVENT_DATE } from '../data/event'

const STORAGE_KEY = 'countdownModalLastShown'
const ONE_DAY = 24 * 60 * 60 * 1000

const readLastShown = () => {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10)
  } catch {
    return 0
  }
}

const writeLastShown = (value) => {
  try {
    if (value) localStorage.setItem(STORAGE_KEY, String(value))
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Storage blocked (private mode etc.): the modal just shows again next visit.
  }
}

// Shows the countdown once a day per visitor, a moment after the page loads,
// and never once the event has started. Add ?countdown to any URL to force it.
export const useCountdownModal = () => {
  const [showCountdownModal, setShowCountdownModal] = useState(false)

  useEffect(() => {
    const now = Date.now()
    const forced = new URLSearchParams(window.location.search).has('countdown')
    if (!forced && (now >= EVENT_DATE || now - readLastShown() < ONE_DAY)) return

    const timer = setTimeout(() => {
      setShowCountdownModal(true)
      writeLastShown(now)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const handleCloseModal = useCallback(() => setShowCountdownModal(false), [])

  const resetModal = useCallback(() => {
    writeLastShown(0)
    setShowCountdownModal(false)
  }, [])

  return { showCountdownModal, handleCloseModal, resetModal }
}
