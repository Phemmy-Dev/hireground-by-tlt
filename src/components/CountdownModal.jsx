import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountdownTicket from './CountdownTicket'

const CountdownModal = ({ isOpen, onClose }) => {
  const closeRef = useRef(null)

  // Escape closes; focus starts on the close button.
  useEffect(() => {
    if (!isOpen) return
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="countdown-title"
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-full max-w-4xl my-auto drop-shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CountdownTicket titleId="countdown-title" onClose={onClose} closeRef={closeRef} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CountdownModal
