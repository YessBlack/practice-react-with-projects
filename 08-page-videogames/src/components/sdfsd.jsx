export function ListOfVideoGames ({ games }) {
  return (
    <>
      {
        games.map(game => (
          <ul key={game.id}>
            <li>{game.name}</li>
          </ul>
        ))
      }
    </>
  )
}
