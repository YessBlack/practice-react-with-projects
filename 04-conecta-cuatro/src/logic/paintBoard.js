import { TURNS } from '../constants/TURNS'

export function paintBoard (i, board, turn) {
  if (i >= 0 && i <= 5) {
    for (let j = 5; j >= i; j--) {
      if (board[j] === null) {
        const newBoard = [...board]
        newBoard[j] = turn
        const newTurn = turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE
        return { newBoard, newTurn }
      }
    }
  }

  if (i >= 6 && i <= 11) {
    for (let j = 11; j >= i; j--) {
      if (board[j] === null) {
        const newBoard = [...board]
        newBoard[j] = turn

        const newTurn = turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE
        return { newBoard, newTurn }
      }
    }
  }

  if (i >= 12 && i <= 17) {
    for (let j = 17; j >= i; j--) {
      if (board[j] === null) {
        const newBoard = [...board]
        newBoard[j] = turn
        const newTurn = (turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
        return { newBoard, newTurn }
      }
    }
  }

  if (i >= 18 && i <= 23) {
    for (let j = 23; j >= i; j--) {
      if (board[j] === null) {
        const newBoard = [...board]
        newBoard[j] = turn
        const newTurn = (turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
        return { newBoard, newTurn }
      }
    }
  }

  if (i >= 24 && i <= 29) {
    for (let j = 29; j >= i; j--) {
      if (board[j] === null) {
        const newBoard = [...board]
        newBoard[j] = turn
        const newTurn = (turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
        return { newBoard, newTurn }
      }
    }
  }

  if (i >= 30 && i <= 35) {
    for (let j = 35; j >= i; j--) {
      if (board[j] === null) {
        const newBoard = [...board]
        newBoard[j] = turn
        const newTurn = (turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
        return { newBoard, newTurn }
      }
    }
  }

  if (i >= 36 && i <= 41) {
    for (let j = 41; j >= i; j--) {
      if (board[j] === null) {
        const newBoard = [...board]
        newBoard[j] = turn
        const newTurn = (turn === TURNS.PLAYER_ONE ? TURNS.PLAYER_TWO : TURNS.PLAYER_ONE)
        return { newBoard, newTurn }
      }
    }
  }
}
