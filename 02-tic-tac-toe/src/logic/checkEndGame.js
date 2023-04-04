export const checkEndGame = (newBoard) => {
  return newBoard.every(square => square !== null)
}