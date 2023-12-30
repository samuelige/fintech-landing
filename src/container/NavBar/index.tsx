import React from 'react'
import Logo from './Logo'
import NavList from './NavList'
import NavActions from './NavActions'

const NavBar = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
        <Logo/>
        <NavList/>
        <NavActions/>
    </div>
  )
}

export default NavBar