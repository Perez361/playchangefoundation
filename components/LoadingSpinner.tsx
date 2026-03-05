'use client'

import { useState, useEffect } from 'react'

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loader after page loads
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loader-wrapper">
      <div className="loader">
        <img src="/images/pcf-logo.png" alt="PlayChange Foundation Logo" />
      </div>
    </div>
  )
}
