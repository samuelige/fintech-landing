import { cards } from '@/_shared/assets/images'
import SubTitle from '@/_shared/components/SubTitle'
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ProductAction = () => {
  return (
    <div className='rounded-lg border-[1px] border-gray-600 pt-[1.12rem] px-[1.06rem]'>
        <div className='flex flex-col space-y-5'>
            <SubTitle>
                Now is not the time to be confused when making  purchases
                online or transaction to your family and friends
            </SubTitle>
            <div>
                <Button
                    component="label"
                    variant="contained"
                >
                    Learn more
                </Button>
            </div>
        </div>
        <div className='w-full flex flex-col'>
            <Image
                src={cards}
                alt={"cards-image"}
                width={403.008}
                height={349.044}
                className='mt-[-1.5rem] mx-auto'
            />
        </div>
    </div>
  )
}

export default ProductAction