import { iPhone } from '@/_shared/assets/images'
import Image from 'next/image'
import React from 'react'

const OverviewImage = () => {
  return (
    <div className='w-full md:w-[31.53125rem] mx-auto xl:mx-0'>
        <Image
            src={iPhone}
            alt='iphone-image'
            width={504.5}
            height={1022.5}
            className='w-full object-fill'
        />
    </div>
  )
}

export default OverviewImage