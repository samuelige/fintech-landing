import Title from '@/_shared/components/Title'
import React from 'react'
import OverviewList from './OverviewList'

const OverviewContent = () => {
  return (
    <div className='mt-8 xl:mt-0'>
        <Title width={"w-full md:w-[25.25rem]"} color={"text-white"}>We provide you the best for you</Title>
        <OverviewList/>
    </div>
  )
}

export default OverviewContent