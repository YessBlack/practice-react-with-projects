import './App.css'
import { useCharacters } from './hooks/useCharacters'
import { useEffect } from 'react'
import { Card } from './components/Card'
import { useInfiniteScroll } from './hooks/useInfiniteScroll'

function App () {
  const { db, loadMore } = useCharacters()
  const { handleScroll } = useInfiniteScroll(loadMore, true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [db])

  return (
    <div className='App'>
      {
        db.map(el => {
          return (
            <Card
              key={el.id}
              img={el.image}
              name={el.name}
              status={el.status}
              location={el.location.name}
              species={el.species}
            />
          )
        })
      }
    </div>
  )
}

export default App
