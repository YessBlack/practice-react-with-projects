import { useState } from 'react'

export function Board () {
  const [board, setBoard] = useState(Array(42).fill(null))
  console.log(board)
  return (
    <section className='grid grid-rows-6 grid-flow-col gap-4 bg-white mt-[20px] p-2 rounded-xl border-2 border-b-8'>
      {
        board.map((_, i) => (
          <div key={i} className='bg-background-circle p-3 rounded-full border-2 w-[50px] h-[50px] border-t-8'>
            
          </div>
        ))
      }
    </section>
  )
}
