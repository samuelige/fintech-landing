import { iPhone_download } from '@/_shared/assets/images'
import Title from '@/_shared/components/Title'
import Image from 'next/image'
import React from 'react'
import DownloadActions from './DownloadActions'

const Download = () => {
  return (
    <div className='w-full bg-white pt-[1.62rem] pb-[8.81rem]'>
        <div className='w-full flex flex-col px-4 lg:px-8 xl-1:px-0  xl-1:max-w-[72rem] xl-1:m-auto relative xl:h-[24.375rem]'>
            <div className='absolute top-0 hidden xl:block xl:right-[5rem] xl-1:right-[1.99rem] h-[24.375rem]'>
                <Image
                    src={iPhone_download}
                    alt={"iPhone_download-image"}
                    width={398.666}
                    height={808}
                    className='object-fill w-full'
                />
            </div>
            <div className='bg-success-100 rounded-[1.1875rem] h-[18rem] w-full flex flex-col mt-auto'>
                
                <div className='my-auto mx-4 md:ml-[3.69rem] md:mr-0'>
                    <Title color={"text-white"}>Download Neutron mobile application now</Title>
                    <DownloadActions/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Download