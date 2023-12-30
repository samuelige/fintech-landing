import { facebook, instagram, twitter } from '@/_shared/assets/icons'
import Image from 'next/image';
import React from 'react'

const SocialMediaList = () => {
    const socialMediaIcons = [facebook, twitter, instagram];

  return (
    <ul className='flex flex-row items-center justify-between w-[8.25rem]'>
        {
            socialMediaIcons.map((item, index) => (
                <li key={index} className='hover:cursor-pointer'>
                    <Image
                        src={item}
                        alt={"socialmediaIcon" + index}
                        width={24}
                        height={24}
                    />
                </li>
            ))
        }
    </ul>
  )
}

export default SocialMediaList