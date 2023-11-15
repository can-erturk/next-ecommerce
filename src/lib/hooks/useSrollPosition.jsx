import { useEffect, useState } from 'react'

const useScrollPosition = () => {
  
  // Set initial state
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  // Update state on scroll
  const handleScroll = () => {
    const currentPosition = {
      x: window.scrollX || document.documentElement.scrollLeft,
      y: window.scrollY || document.documentElement.scrollTop,
    }
    setScrollPosition(currentPosition)
  }

  // Add event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}

export default useScrollPosition
