import { like, lock, phone, wallet_white } from '@/_shared/assets/icons';
import Image from 'next/image';
import React from 'react'

const OverviewList = () => {
    interface I_ListItems {
        icon: string;
        title: string;
        subTitle: string;
    };

    const listItems:I_ListItems[] = [
        {
            icon: phone,
            title: "24hours  assistance",
            subTitle: "Now is not the time to be confused when making  purchases online.",
        },
        {
            icon: lock,
            title: " 24hours Security ",
            subTitle: "Now is not the time to be confused when making  purchases online.",
        },
        {
            icon: like,
            title: "Full Satisfiaction",
            subTitle: "Now is not the time to be confused when making  purchases online.",
        },
        {
            icon: wallet_white,
            title: "Fast Transactions",
            subTitle: "Now is not the time to be confused when making  purchases online.",
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[1.38rem] gap-y-[2.06rem] mt-[1.62rem] xl:w-[39.005rem]'>
        {
            listItems?.map(({icon, title, subTitle}, index) => (
                <li key={index} className='space-y-[0.69rem] text-white flex flex-col'>
                    <Image
                        src={icon}
                        alt={"overView list icon"}
                    />
                    <p className='text-sm font-medium'>{title}</p>
                    <p>{subTitle}</p>
                </li>
            ))
        }
    </div>
  )
}

export default OverviewList