import React, { FC } from 'react'

const Title:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <h3 className='text-[2.1875rem] font-medium leading-[2.66656rem] text-black-200 w-[30.0625rem] text-start'>{children}</h3>
  )
}

export default Title