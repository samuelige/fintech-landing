import { business_acct, right_arrow, saving, wallet } from '@/_shared/assets/icons';
import Image from 'next/image';
import React, { FC } from 'react'

interface ProductList {
    icon: string;
    title: string;
    subTitle?: string;
}


const ProductList:FC = () => {
    const ListItem: ProductList[] = [
        {
            icon: wallet,
            title: "Finance Tracking",
        },
        {
            icon: saving,
            title: "Saving Account",
            subTitle: `Now is not the time to be confused when making  purchases
            online or transaction to your family and friends`,
        },
        {
            icon: business_acct,
            title: "Business Account",
        },
    ]
  return (
    <ul>
        {
           ListItem?.map(({icon, title, subTitle}, index) => (
            <li key={index} className='flex w-full flex-row items-center md:w-[40.875rem] xl-w-full justify-between pt-[1.875rem] pr-[0.75rem] pb-[1.875rem] pl-4 rounded-xl hover:bg-gray-600 space-x-[3.31rem]'>
                
                <div className='flex flex-row space-x-[0.62rem] items-center'>
                    <div className='w-[2.6875rem] h-[2.75rem]'>
                        <Image
                            src={icon}
                            width={43}
                            height={44}
                            alt="list_item-icon"
                            className='w-full object-fill'
                        />
                    </div>
                    
                    <div className='flex-1 flex flex-col'>
                        <p className='text-lg text-black-100 font-medium'>{title}</p>
                        <p className='mt-[0.38rem] empty:hidden  xl:w-[27.8125rem]'>{subTitle}</p>
                    </div>
                </div>
                <Image
                    src={right_arrow}
                    width={24}
                    height={24}
                    alt="right_arrow-icon"
                />
            </li>
           )) 
        }
    </ul>
  )
}

export default ProductList