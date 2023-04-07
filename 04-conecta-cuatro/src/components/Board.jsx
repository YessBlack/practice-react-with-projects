import { useEffect, useState } from 'react'
import { Player } from './Player'

export function Board () {
  const [board, setBoard] = useState(Array(42).fill(null))
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

  return (
    <>
      <div className={`${isInside ? 'cursor-pointer' : 'cursor-default'} absolute bg-player-one w-[30px] h-[30px] border-t-8 border-2 rounded-b-xl top-[90px] left-[20px] mr-[-310px]`} style={{ transform: `translate(${position.x}px)` }} />

      <div className='flex items-center gap-5 flex-wrap'>
        <Player numberPlayer={1} move={0} />
        <section
          className='grid grid-rows-6 grid-flow-col gap-4 bg-white mt-[20px] p-3 rounded-xl border-2 border-b-8'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {
        board.map((_, i) => (
          <div key={i} className='bg-background-circle p-3 rounded-full border-2 w-[55px] h-[55px] border-t-8' />
        ))
      }
        </section>
        <Player numberPlayer={2} move={0} />
      </div>
    </>

  )
}
