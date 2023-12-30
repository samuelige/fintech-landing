import { star_1, star_2 } from '@/_shared/assets/icons';
import Image from 'next/image';
import React from 'react'
import BannerLayout from './BannerLayout';
import BannerImage from './BannerImage';


const Banner = () => {
  return (
    <div className='flex flex-col mt-[5.91rem]'>
        <BannerLayout/>
        <BannerImage/>
        
    </div>
  )
}

export default Banner;