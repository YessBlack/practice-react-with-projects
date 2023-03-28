export function WhatHappening ({ title, who, quantity }) {
  return (
    <article className='tw-whatHappening'>
      <div className='tw-header-information'>
        <span className='text'>{title}</span>
        <span className='icon-points' />
      </div>
      <strong>{who}</strong>
      <span className='text'>{quantity}</span>
    </article>
  )
}
