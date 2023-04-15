import { useState } from 'react'
import { searchGames } from '../services/games'

export function useVideogames ({ search }) {
  const [responseGames, setResponseGames] = useState({})
  const [loading, setLoading] = useState(false)

  const getVideogames = async () => {
    setLoading(true)
    const data = await searchGames({ search })
    setResponseGames(data)
    setLoading(false)
  }

  return { videogames: responseGames, loading, getVideogames }
}
