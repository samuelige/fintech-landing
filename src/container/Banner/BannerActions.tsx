import { Button } from '@mui/material'
import React from 'react'

const BannerActions = () => {
  return (
    <div className='flex flex-row items-center space-x-[1.12rem]'>
        <Button
            component="label"
            variant="contained"
        >
            Open an account
        </Button>
        <Button
            component="label"
            variant="outlined"
        >
            Learn more
        </Button>
    </div>
  )
}

export default BannerActions