import { wave } from '@/_shared/assets/images'
import TitleWithSubTitle from '@/_shared/components/TitleWithSubTitle'
import React from 'react'
import ProductList from './ProductList'
import ProductAction from './ProductAction'

const Products = () => {
  return (
    <div id="products" className='mt-[-1.5rem] bg-white'>
        <div className='w-full flex flex-col pt-[5.44rem] px-4 lg:px-8 xl-1:px-0 xl-1:max-w-[77.59806rem] xl-1:m-auto'>
            <TitleWithSubTitle
                title={`Let’s explore our range of products`}
                image={wave}
                subTitle={`Now is not the time to be confused when making  purchases
                online or transaction to your family and friends`}
            />

            <div className='mt-12 w-full flex flex-col xl:flex-row justify-between'>
                <ProductList/>
                <ProductAction/>
            </div>
        </div>
        
    </div>
  )
}

export default Products