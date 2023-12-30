import Title from '@/_shared/components/Title'
import React from 'react'
import ServiceList from './ServiceList'

const Services = () => {
  return (
    <div className='w-full bg-white pt-[6.19rem'>
        <div className='w-full flex flex-col xl-1:max-w-[77.59806rem] xl-1:m-auto'>
            <Title>Manage your finance with our services</Title>
            <ServiceList/>
        </div>
        
    </div>
  )
}

export default Services