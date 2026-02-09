import { useState, useEffect } from 'react'

export const useCountdownModal = () => {
  // Countdown modal is disabled - Career Fair 2025 is over
  const [showCountdownModal, setShowCountdownModal] = useState(false)

  useEffect(() => {
    // Modal disabled - Career Fair 2025 is over
    // No countdown to show
  }, [])

  const handleCloseModal = () => {
    setShowCountdownModal(false)
  }

  const resetModal = () => {
    localStorage.removeItem('countdownModalLastShown')
    setShowCountdownModal(false)
  }

  return {
    showCountdownModal,
    handleCloseModal,
    resetModal
  }
}
