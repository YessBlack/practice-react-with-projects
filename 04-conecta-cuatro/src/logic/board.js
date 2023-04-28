export function getWinner (board) {
  // buscar ganador horizontal
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 1 && board[i + 1] === 1 && board[i + 2] === 1 && board[i + 3] === 1) {
      return 1
    }

    if (board[i] === 2 && board[i + 1] === 2 && board[i + 2] === 2 && board[i + 3] === 2) {
      return 2
    }
  }

  // buscar ganador vertical
  for (let i = board.length; i >= 0; i--) {
    if (board[i] === 1 && board[i - 6] === 1 && board[i - 12] === 1 && board[i - 18] === 1) {
      return 1
    }

    if (board[i] === 2 && board[i - 6] === 2 && board[i - 12] === 2 && board[i - 18] === 2) {
      return 2
    }
  }

  // Empate

  if (board.every((item) => item !== null)) {
    return 0
  }
}
