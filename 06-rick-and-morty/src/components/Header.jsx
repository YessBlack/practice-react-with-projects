import { useState } from 'react';

export function Header () {

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  
  return (
    <header className='header'>
      <img src='https://blog.redbubble.com/wp-content/uploads/2018/09/rick-morty-banner-768x256.png' alt='banner-rick-and-morty' />
      <h1>Characters</h1>
      <span className="icon-angle-down" onClick={handleClick}></span>
    </header>
  )
}