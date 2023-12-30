import { Button } from '@mui/material'
import React from 'react'

const FooterField = () => {
  return (
    <div className='mt-[2.25rem]'>
        <label className='text-[0.9375rem] font-medium text-black-200'>Follow our latest news</label>
        <div className='flex flex-row rounded-[0.625rem] border-[1px] border-gray-900 py-[0.31rem] pr-[0.19rem] mt-[1.25rem]'>
            <input 
                placeholder='Email address'
                className='pl-[0.69rem] h-[3.0625rem] flex-grow border-0 outline-none text-[0.8125rem] text-gray-800' type="text" />
            <div>
                <Button
                    component="label"
                    variant="contained"
                >
                    Submit
                </Button>
            </div>
        </div>
    </div>
  )
}

export default FooterField