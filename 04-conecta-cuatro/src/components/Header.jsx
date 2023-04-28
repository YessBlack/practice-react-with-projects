export function Header ({ resetGame }) {
  return (
    <header className='flex justify-between w-[500px] mt-[30px] items-center'>
      <button className='bg-button-color text-white p-2 rounded-full w-[80px]'>MENU</button>
      <div className='flex flex-col gap-1'>
        <div className='flex gap-1'>
          <div className='w-[20px] h-[20px] bg-player-one rounded-full border-2 border-b-4' />
          <div className='w-[20px] h-[20px] bg-player-two rounded-full border-2 border-b-4' />
        </div>
        <div className='flex gap-1'>
          <div className='w-[20px] h-[20px] bg-player-two rounded-full border-2 border-b-4' />
          <div className='w-[20px] h-[20px] bg-player-one rounded-full border-2 border-b-4' />
        </div>
      </div>
      <button className='bg-button-color text-white p-2 rounded-full w-[80px]' onClick={resetGame}>RESET</button>
    </header>
  )
}
