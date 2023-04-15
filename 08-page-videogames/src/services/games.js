export const searchGames = async ({ search }) => {
  const response = await fetch(`https://api.rawg.io/api/games/${search.replaceAll(' ', '-')}?key=99917d63ba46474b8fd7ed9fc1218811`)

  const data = await response.json()

  return data
}
