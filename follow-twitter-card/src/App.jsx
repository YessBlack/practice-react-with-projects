import './App.css'
import { TwitterCard } from './components/TwitterCard'
import { WhatHappening } from './components/WhatHappening'

function App () {
  return (
    <>
      <div className='tw-container-twitter'>
        <section className='tw-suggestion-follow'>
          <h2>A quien seguir </h2>
          <TwitterCard
            userName='yessblack'
            name='Angelica Garcia'
            initialIsFollowing={false}
          />
          <TwitterCard
            userName='natioterom'
            name='Nati Otero'
            initialIsFollowing={false}
          />
          <TwitterCard
            userName='midudev'
            name='Miguel Angel Duran'
            initialIsFollowing={false}
          />
          <TwitterCard
            userName='sulyv03'
            name='Suly Villamizar'
            initialIsFollowing={false}
          />
          <a href='#'>Mostar mas...</a>
        </section>
        <section className='tw-what-happening'>
          <h2>Que esta sucediendo</h2>
          <WhatHappening
            title='Entretenimiento - Tendencia'
            who='Morat'
            quantity='3.400 Tweets'
          />
          <WhatHappening
            title='Entretenimiento - Tendencia'
            who='Morat'
            quantity='3.400 Tweets'
          />
          <WhatHappening
            title='Entretenimiento - Tendencia'
            who='Morat'
            quantity='3.400 Tweets'
          />
          <WhatHappening
            title='Entretenimiento - Tendencia'
            who='Morat'
            quantity='3.400 Tweets'
          />
          <a href='#'>Mostrar mas...</a>
        </section>
      </div>

    </>
  )
}

export default App
