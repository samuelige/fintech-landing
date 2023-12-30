import React, { FC } from 'react'

const HeroLayout:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='flex flex-col bg-gray-500'>{children}</div>
  )
}

export default HeroLayout