import { useRef, useState } from 'react'
import { searchGames } from '../services/games'

export function useVideogames ({ search }) {
  const [responseGames, setResponseGames] = useState({})
  const [loading, setLoading] = useState(false)
  const prevSearch = useRef(search)

  const getVideogames = async () => {
    if (search === prevSearch.current) return
    try {
      setLoading(true)
      prevSearch.current = search
      const data = await searchGames({ search })
      setResponseGames(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return { videogames: responseGames, loading, getVideogames }
}
