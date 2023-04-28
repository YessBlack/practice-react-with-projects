import { useEffect, useState } from 'react'

export function useMoveMouse () {
  const [position, setPosition] = useState({ x: 650 })
  const [isInside, setIsInside] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX } = event
      if (isInside) {
        setPosition({ x: clientX })
      }
    }

    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [isInside])

  const handleMouseEnter = () => {
    setIsInside(true)
  }

  const handleMouseLeave = () => {
    setIsInside(false)
  }

  return {
    position,
    isInside,
    handleMouseEnter,
    handleMouseLeave
  }
}
