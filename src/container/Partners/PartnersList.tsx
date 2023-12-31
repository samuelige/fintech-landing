import { google, mastercard, ovo, paypal, stripe, visa } from '@/_shared/assets/images'
import Image from 'next/image';
import React from 'react'

const PartnersList = () => {
    const listItems: string[] = [stripe, ovo, visa, paypal, mastercard, google];
  return (
    <ul className='mt-[3.19rem] grid grid-cols-6 gap-x-[1.12rem]'>
        {
            listItems.map((item, index) => (
                <li key={index} className='h-auto md:h-[8.4375rem]'>
                    <Image
                        src={item}
                        alt="partner-image"
                        width={191}
                        height={135}
                        // className="object-fill w-full"
                    />
                </li>
            ))
        }
        
    </ul>
  )
}

export default PartnersList