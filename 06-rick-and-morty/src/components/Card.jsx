export function Card ({ img, name, status, location, species }) {
  const classNameStatus = status === 'Alive' ? 'alive' : 'dead'
  return (
    <article className='card'>
      <img src={img} alt={name} />
      <div className='card__description'>
        <div className='card__status'>
          <h1>{name}</h1>
          <div className='status__card'>
            <span className={classNameStatus}>.</span>
            <p>{status}</p>
          </div>
        </div>
        <div className='content-information'>
          <p className='information'>Last known location:</p>
          <p>{location}</p>
        </div>
        <div className='content-information'>
          <p className='information'>Species:</p>
          <p>{species}</p>
        </div>
      </div>
    </article>
  )
}
