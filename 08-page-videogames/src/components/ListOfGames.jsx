export function ListOfGames ({ videogames }) {
  console.log(videogames)
  return (
    <div className='videogames'>
      <h3>{videogames.name}</h3>
      <img
        src={videogames.background_image} alt={videogames.name}
      />
      <p>{videogames.description_raw}</p>
    </div>
  )
}

export function Games ({ videogames }) {
  const hasGame = Object.entries(videogames).length !== 0
  return (
    hasGame
      ? <ListOfGames videogames={videogames} />
      : <p>No se encontraron videojuegos para esta busqueda</p>
  )
}
