import { confetti_1 } from '@/_shared/assets/icons'
import Image from 'next/image'
import React from 'react'

const Announcement = () => {
  return (
    <div className='flex flex-row space-x-[0.12rem] items-center justify-center text-gray-200 bg-gray-300 py-[0.37rem] text-sm '>
        <Image
            src={confetti_1}
            width={19}
            height={19}
            alt='confetti_1-icon'
        />
        <p>Announcing our new sponsorship</p>
    </div>
  )
}

export default Announcement