import { useEffect, useState } from 'react'
import { Player } from './Player'

const TURNS = {
  PLAYER_ONE: 1,
  PLAYER_TWO: 2
}

export function Board () {
  const [board, setBoard] = useState(Array(42).fill(null))
  const [position, setPosition] = useState({ x: 650 })
  const [isInside, setIsInside] = useState(false)
  const [turn, setTurn] = useState(TURNS.PLAYER_ONE)

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

  const handleClickBoard = (i) => {
    if (i >= 0 && i <= 5) {
      for (let j = 5; j >= i; j--) {
        if (board[j] === null) {
          setBoard((prev) => {
            const newBoard = [...prev]
            newBoard[j] = turn
            return newBoard
          })
          setTurn(turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
          return
        }
      }
    }

    if (i >= 6 && i <= 11) {
      for (let j = 11; j >= i; j--) {
        if (board[j] === null) {
          setBoard((prev) => {
            const newBoard = [...prev]
            newBoard[j] = turn
            return newBoard
          })
          setTurn(turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
          return
        }
      }
    }

    if (i >= 12 && i <= 17) {
      for (let j = 17; j >= i; j--) {
        if (board[j] === null) {
          setBoard((prev) => {
            const newBoard = [...prev]
            newBoard[j] = turn
            return newBoard
          })
          setTurn(turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
          return
        }
      }
    }

    if (i >= 18 && i <= 23) {
      for (let j = 23; j >= i; j--) {
        if (board[j] === null) {
          setBoard((prev) => {
            const newBoard = [...prev]
            newBoard[j] = turn
            return newBoard
          })
          setTurn(turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
          return
        }
      }
    }

    if (i >= 24 && i <= 29) {
      for (let j = 29; j >= i; j--) {
        if (board[j] === null) {
          setBoard((prev) => {
            const newBoard = [...prev]
            newBoard[j] = turn
            return newBoard
          })
          setTurn(turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
          return
        }
      }
    }

    if (i >= 30 && i <= 35) {
      for (let j = 35; j >= i; j--) {
        if (board[j] === null) {
          setBoard((prev) => {
            const newBoard = [...prev]
            newBoard[j] = turn
            return newBoard
          })
          setTurn(turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
          return
        }
      }
    }

    if (i >= 36 && i <= 41) {
      for (let j = 41; j >= i; j--) {
        if (board[j] === null) {
          setBoard((prev) => {
            const newBoard = [...prev]
            newBoard[j] = turn
            return newBoard
          })
          setTurn(turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
          return
        }
      }
    }
  }

  console.log(board)

  return (
    <>
      <div className='flex items-center gap-5 flex-wrap'>
        <div className={`${isInside ? 'cursor-pointer' : 'cursor-default'} absolute bg-player-one w-[30px] h-[30px] border-t-8 border-2 rounded-b-xl top-[90px] left-[10px]`} style={{ transform: `translate(${position.x}px)` }} />
        <Player
          numberPlayer={1}
          move={0}
          classNameBorder={turn === TURNS.PLAYER_ONE ? 'border-player-one' : ''}
        />
        <section
          className='grid grid-rows-6 grid-flow-col gap-4 bg-white mt-[20px] p-3 rounded-xl border-2 border-b-8'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {
        board.map((el, i) => (
          <div
            key={i}
            className={`bg-background-circle p-3 rounded-full border-2 w-[55px] h-[55px] border-t-8 ${el === 1 ? 'bg-player-one' : el === 2 ? 'bg-player-two' : ''}`}
            onClick={() => handleClickBoard(i)}
          />
        ))
      }
        </section>
        <Player
          numberPlayer={2}
          move={0}
          classNameBorder={turn === TURNS.PLAYER_TWO ? 'border-player-two' : ''}
        />
      </div>
    </>

  )
}
