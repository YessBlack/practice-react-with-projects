import './App.css'
import { Games } from './components/ListOfGames'
import { useVideogames } from './hooks/useVideogames'
import { useSearchVideoGames } from './hooks/useSearch'

function App () {
  const { search, setSearch, error } = useSearchVideoGames()
  const { videogames, loading, getVideogames } = useVideogames({ search })

  const handleSubmit = (e) => {
    e.preventDefault()
    getVideogames()
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (search.startsWith(' ')) return
    setSearch(newQuery)
  }

  return (
    <div className='page'>
      <header className='bg-[#ffffff]'>
        <h1>Buscador de videojuegos</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query' value={search} onChange={handleChange} placeholder='Call Of Duty, FarCry, The Last Of Us' className='search'
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
          />
          <button className='btn-search'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : <Games videogames={videogames} />
        }
      </main>
    </div>
  )
}

export default App
