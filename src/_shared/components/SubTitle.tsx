import React, { FC } from 'react'

const SubTitle:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <p className='text-black-100 w-full sm:w-[27.8125rem]'>{children}</p>
  )
}

export default SubTitle