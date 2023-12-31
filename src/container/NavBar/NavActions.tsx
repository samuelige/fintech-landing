import { Button } from '@mui/material'
import React from 'react'

const NavActions = () => {
  return (
    <div className='hidden md:flex flex-row items-center space-x-[2.88rem]'>
        <Button
            component="label"
            variant="text"
            className="[&.MuiButtonBase-root]:h-[44px]"
        >
            Sign in
        </Button>
        <Button
            component="label"
            variant="outlined"
            className="[&.MuiButtonBase-root]:h-[44px]"
        >
            Open an account
        </Button>
    </div>
  )
}

export default NavActions