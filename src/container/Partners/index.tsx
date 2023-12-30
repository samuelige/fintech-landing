import { wave } from '@/_shared/assets/images'
import TitleWithSubTitle from '@/_shared/components/TitleWithSubTitle'
import React from 'react'
import PartnersList from './PartnersList'

const Partners = () => {
  return (
    <div className='w-full bg-white'>
        <div className='w-full flex flex-col pt-[5.44rem] lg:px-8 xl-1:px-0 xl-1:max-w-[77.59806rem] xl-1:m-auto'>
            <TitleWithSubTitle
                title={`Meet our most trusted partners Neutron`}
                image={wave}
                subTitle={`Now is not the time to be confused when making  purchases
                online or transaction to your family and friends`}
            />

           <PartnersList/>
        </div>
        
    </div>
  )
}

export default Partners