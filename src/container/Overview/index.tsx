import React from 'react'
import OverviewContent from './OverviewContent'
import OverviewImage from './OverviewImage'

const Overview = () => {
  return (
    <div className='w-full bg-success-200 pt-[7.12rem]'>
        <div className='w-full flex flex-rol items-start justify-between xl-1:max-w-[77.59806rem] xl-1:m-auto'>
            <OverviewContent/>
            <OverviewImage/>
        </div>
        
    </div>
  )
}

export default Overview