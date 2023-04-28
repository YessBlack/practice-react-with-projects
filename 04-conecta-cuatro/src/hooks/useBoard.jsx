import { useEffect, useState } from 'react'
import { TURNS } from '../constants/TURNS'
import { getWinner } from '../logic/board'
import { paintBoard } from '../logic/paintBoard'
import confetti from 'canvas-confetti'

export function useBoard () {
  const [board, setBoard] = useState(Array(42).fill(null))
  const [turn, setTurn] = useState(TURNS.PLAYER_ONE)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    setWinner(getWinner(board))
  }, [board])

  useEffect(() => {
    if (winner === 1 || winner === 2) {
      confetti({
        particleCount: 100
      })
    }
  }, [winner])

  const handleClickBoard = (i) => {
    const { newBoard, newTurn } = paintBoard(i, [...board], turn)

    setBoard(newBoard)
    setTurn(newTurn)
  }

  const handleResetGame = () => {
    setBoard(Array(42).fill(null))
    setTurn(TURNS.PLAYER_ONE)
    setWinner(null)
  }

  return { board, turn, winner, handleClickBoard, handleResetGame, setWinner }
}
