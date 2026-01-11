import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

function Header() {
  return (
    <header className="flex z-10 w-full max-w-7xl mx-auto items-center justify-between px-8 py-5 text-primary-100">
        <Logo />
        <Navigation />
    </header>
  )
}

export default Header