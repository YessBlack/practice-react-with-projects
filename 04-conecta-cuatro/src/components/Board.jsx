import { useState } from 'react'
import { Player } from './Player'

export function Board () {
  const [board, setBoard] = useState(Array(42).fill(null))
  console.log(board)
  return (
    <>
      <div className='flex items-center gap-5 flex-wrap'>
        <Player numberPlayer={1} move={0} />
        <section className='grid grid-rows-6 grid-flow-col gap-4 bg-white mt-[20px] p-3 rounded-xl border-2 border-b-8'>
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
