import { Link } from '../Link'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>Hola, soy Angelica y estoy desarrollando router</p>
      <img src='https://pbs.twimg.com/profile_images/1597270000238223365/hLhY1l4A_400x400.jpg' alt='foto perfil angelica' />
      <br />
      <Link to='/'>Ir a Home</Link>
    </>
  )
}
