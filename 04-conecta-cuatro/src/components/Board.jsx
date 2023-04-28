import { Player } from './Player'
import { Winner } from './Winner'
import { useBoard } from '../hooks/useBoard'
import { TURNS } from '../constants/TURNS'
import { useMoveMouse } from '../hooks/useMoveMouse'
import { Header } from './Header'
import { useMove } from '../hooks/useMove'

export function Board () {
  const { board, turn, winner, handleClickBoard, handleResetGame } = useBoard()
  const { position, isInside, handleMouseEnter, handleMouseLeave } = useMoveMouse()
  const { movesPlayer1, movesPlayer2 } = useMove({ board })

  return (
    <>
      <Header resetGame={handleResetGame} />
      <div className='flex items-center gap-5 flex-wrap'>
        <div className={`${isInside ? 'cursor-pointer' : 'cursor-default'} absolute bg-player-one w-[30px] h-[30px] border-t-8 border-2 rounded-b-xl top-[90px] left-[10px]`} style={{ transform: `translate(${position.x}px)` }} />
        <Player
          numberPlayer={1}
          move={movesPlayer1}
          classNameBorder={turn === TURNS.PLAYER_ONE ? 'border-player-one' : ''}
        />
        <section
          className='grid grid-rows-6 grid-flow-col gap-4 bg-white mt-[20px] p-3 rounded-xl border-2 border-b-8'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {
        board.map((el, i) => (
          <div
            key={i}
            className={`bg-background-circle p-3 rounded-full border-2 w-[55px] h-[55px] border-t-8 ${el === 1 ? 'bg-player-one' : el === 2 ? 'bg-player-two' : ''}`}
            onClick={() => handleClickBoard(i)}
          />
        ))
      }
        </section>
        <Player
          numberPlayer={2}
          move={movesPlayer2}
          classNameBorder={turn === TURNS.PLAYER_TWO ? 'border-player-two' : ''}
        />
      </div>
      {
        winner &&
          <Winner
            numberPlayer={winner}
            resetGame={handleResetGame}
            move={winner === 1 ? movesPlayer1 : movesPlayer2}
          />
      }
    </>
  )
}
