import React from 'react'
import OverviewContent from './OverviewContent'
import OverviewImage from './OverviewImage'

const Overview = () => {
  return (
    <div className='w-full bg-success-200 pt-[7.12rem] pb-[7.12rem] xl:pb-0'>
        <div className='w-full flex flex-col-reverse xl:flex-row items-start justify-between px-4 lg:px-8 xl-1:px-0 xl-1:max-w-[77.59806rem] xl-1:m-auto'>
            <OverviewContent/>
            <OverviewImage/>
        </div>
        
    </div>
  )
}

export default Overview