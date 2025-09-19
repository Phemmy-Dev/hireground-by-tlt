import { useState, useEffect } from 'react'

export const useCountdownModal = () => {
  const [showCountdownModal, setShowCountdownModal] = useState(false)

  useEffect(() => {
    // Check if user has seen the modal in the last hour
    const lastShownTimestamp = localStorage.getItem('countdownModalLastShown')
    const now = new Date().getTime()
    const oneHour = 60 * 60 * 1000 // 1 hour in milliseconds
    
    // Show modal if it's never been shown or if more than 1 hour has passed
    if (!lastShownTimestamp || (now - parseInt(lastShownTimestamp)) > oneHour) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setShowCountdownModal(true)
        localStorage.setItem('countdownModalLastShown', now.toString())
      }, 2000) // 2 second delay
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleCloseModal = () => {
    setShowCountdownModal(false)
  }

  const resetModal = () => {
    // Clear localStorage to reset the modal state
    localStorage.removeItem('countdownModalLastShown')
    setShowCountdownModal(false)
  }

  return {
    showCountdownModal,
    handleCloseModal,
    resetModal
  }
}
