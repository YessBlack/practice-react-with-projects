import { Player } from './Player'

export function Winner ({ numberPlayer, resetGame, move }) {
  return (
    <>
      <section
        className='absolute w-[100vw] h-[100vh] top-0 left-0 grid place-items-center bg-[rgba(0, 0, 0, 0.7)] rounded-xl'
      >
        <div className='bg-[#111] h-[300px] w-[320px] rounded-xl flex flex-col justify-center items-center gap-4 p-3'>
          <h2 className='text-white'>Felicitaciones</h2>

          <header className=''>
            {
              numberPlayer === 1 || numberPlayer === 2
                ? <Player numberPlayer={numberPlayer} move={move} />
                : <p className='text-white'>Empate</p>
            }
          </header>

          <footer>
            <button className='bg-button-color p-2 rounded-xl' onClick={resetGame}>Empezar de nuevo</button>
          </footer>
        </div>

      </section>
    </>

  )
}
