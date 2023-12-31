import { Button } from '@mui/material'
import React from 'react'

const BannerActions = () => {
  return (
    <div className='w-full flex flex-col space-y-4 sm:w-auto sm:space-y-0 sm:flex-row items-center sm:space-x-[1.12rem]'>
        <Button
            component="label"
            variant="contained"
            className="[&.MuiButtonBase-root]:w-full [&.MuiButtonBase-root]:sm:w-auto"
        >
            Open an account
        </Button>
        <Button
            component="label"
            variant="outlined"
            className="[&.MuiButtonBase-root]:w-full [&.MuiButtonBase-root]:sm:w-auto"
        >
            Learn more
        </Button>
    </div>
  )
}

export default BannerActions