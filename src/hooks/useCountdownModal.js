import { useState, useEffect } from 'react'

export const useCountdownModal = () => {
  const [showCountdownModal, setShowCountdownModal] = useState(false)

  useEffect(() => {
    // Check if user has already seen the modal today
    const lastShown = localStorage.getItem('countdownModalLastShown')
    const today = new Date().toDateString()
    
    if (lastShown !== today) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setShowCountdownModal(true)
        localStorage.setItem('countdownModalLastShown', today)
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
