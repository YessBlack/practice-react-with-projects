export function Player ({ numberPlayer, move }) {
  const classNameBG = numberPlayer === 1 ? 'text-player-one' : 'text-player-two'

  return (
    <article className='p-1 w-[100px] h-[130px] border-2 border-b-8 rounded-xl bg-white text-center'>
      <span className={`icon-happy ${classNameBG} text-3xl`} />
      <p className='text-1xl font-bold'>PLAYER {numberPlayer}</p>
      <p className='text-4xl font-bold'>{move}</p>
    </article>
  )
}
