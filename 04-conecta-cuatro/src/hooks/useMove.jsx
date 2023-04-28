import { useEffect, useState } from 'react'

export function useMove ({ board }) {
  const [movesPlayer1, setMovesPlayer1] = useState(0)
  const [movesPlayer2, setMovesPlayer2] = useState(0)

  useEffect(() => {
    // contar los movimientos
    setMovesPlayer1([...board].filter(el => el === 1).length)
    setMovesPlayer2([...board].filter(el => el === 2).length)
  }, [board])

  return { movesPlayer1, movesPlayer2 }
}
