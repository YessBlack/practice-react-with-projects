import { useEffect, useRef, useState } from 'react'

export function useSearchVideoGames () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar un videojuego vacio')
      return
    }

    if (search.match(/^[0-9]+$/)) {
      setError('No se puede buscar un videojuego con numeros')
      return
    }

    if (search.length < 3) {
      setError('No se puede buscar un videojuego con menos de 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
