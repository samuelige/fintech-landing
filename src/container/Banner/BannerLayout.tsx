import { star_1, star_2 } from '@/_shared/assets/icons'
import Image from 'next/image'
import React from 'react'
import BannerActions from './BannerActions'

const BannerLayout = () => {
  return (
    <div className='flex flex-row justify-between'>
        <section className='flex flex-col space-y-2.5'>
            <Image
                src={star_1}
                width={51}
                height={51}
                alt='star_1-icon'
                className='mt-4'
            />
            <Image
                src={star_2}
                width={38}
                height={38}
                alt='star_2-icon'
                className='md:ml-4'
            />
        </section>
        <section className='flex flex-col items-center'>
            <p className='rounded-[1.4375rem] bg-success-25 font-medium p-2.5 w-44 text-center text-black-200'>Welcome to Neutron</p>
            <h1 className='text-black-200 text-[2.4375rem] md:text-[3.4375rem] font-medium w-full lg:w-[48rem] md:leading-[4.19031rem] text-center mt-3'>Need Financial Freedom Think Of Neutron</h1>
            <p className='text-black-100 leading-[1.219rem] w-full md:w-[30.25rem] text-center mt-[1.69rem] mb-[1.31rem]'>Now is not the time to be confused when making purchases online or transaction to your family and friends</p>
            <BannerActions/>
        </section>
        <section className='flex flex-col space-y-2.5'>
            <Image
                src={star_1}
                width={51}
                height={51}
                alt='star_1-icon'
                className='mt-4'
            />
            <Image
                src={star_2}
                width={38}
                height={38}
                alt='star_2-icon'
                className='md:ml-4'
            />
        </section>
    </div>
  )
}

export default BannerLayout