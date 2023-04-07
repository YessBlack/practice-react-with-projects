export const getCharacters = async (page) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  const data = await res.json()
  const { results } = data
  return results
}