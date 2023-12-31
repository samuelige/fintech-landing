import Link from 'next/link'
import React from 'react'

const NavList = () => {
    const navListItem: Record<string, string>[] = [
        {
            name: "About",
            pathName: "#about",
        },
        {
            name: "Products",
            pathName: "#products",
        },
        {
            name: "Contact",
            pathName: "#contact",
        },
    ] 
  return (
    <ul className='hidden md:flex md:flex-row w-[19.6875rem] items-center justify-between '>
        {
           navListItem?.map(({ name, pathName}, index) => (
            <Link className='font-medium' key={index} href={pathName}>{name}</Link>
           )) 
        }
    </ul>
  )
}

export default NavList