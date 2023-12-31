import { banner } from '@/_shared/assets/images'
import Image from 'next/image'
import React from 'react'

const BannerImage = () => {
  return (
    <div className='w-full xl:w-[65.125rem] mt-7 mx-auto'>
        <Image
            src={banner}
            width={1042}
            height={740}
            alt='banner-image'
            className='w-full object-fill'
        />
    </div>
  )
}

export default BannerImage