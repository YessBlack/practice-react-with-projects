import './App.css'
import { Board } from './components/Board'
import { Header } from './components/Header'

function App () {
  return (
    <main className='flex flex-col justify-center items-center gap-5'>
      <Header />
      <Board />
    </main>
  )
}

export default App
