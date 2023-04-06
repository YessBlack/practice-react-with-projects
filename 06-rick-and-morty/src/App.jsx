import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/Card'

function App () {
  const [db, setDb] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const results = await res.json()
      setDb(results.results)
    }
    getData()
  }, [])

  console.log(db)
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
