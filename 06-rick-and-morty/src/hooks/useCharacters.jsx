import { getCharacters } from "../services/getCharacters"
import { useEffect, useState } from 'react'

export function useCharacters () {
  const [db, setDb] = useState([])
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters(page).then(data => setDb([...db, ...data]))
  }, [page])

  const loadMore = () => {
    setPage(page + 1);
  }

  return { db, loadMore }
}