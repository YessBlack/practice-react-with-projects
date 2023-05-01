import { Link } from '../Link'

export function Page404 () {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='gif del perro this is Fine quemándose vivo' />
        <br />
        <Link to='/'>Volver a Home</Link>
      </div>
    </>
  )
}
