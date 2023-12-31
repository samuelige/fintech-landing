import React, { FC } from 'react'

const Title:FC<{children: React.ReactNode, color?: string, width?: string}> = ({children, color, width}) => {
  return (
    <h3 className={`text-[2.1875rem] font-medium leading-[2.66656rem] ${!width ? "w-full sm:w-[30.0625rem]" : width} text-start ${!color ? "text-black-200" : color}`}>{children}</h3>
  )
}

export default Title