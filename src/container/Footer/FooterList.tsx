import React, { FC } from 'react'

interface List {
    title: string;
    navs: string[];
}

interface FooterListProps {
    data: List;
}

const FooterList:FC<FooterListProps> = ({data}) => {
  return (
    <div>
        <h3 className='text-black-200 font-medium'>{data?.title}</h3>
        <ul className='mt-4 flex flex-col space-y-[1.38rem]'>
            {
                data?.navs?.map((item, index) => (
                    <li className='hover:cursor-pointer' key={index}>{item}</li>
                ))
            }
        </ul>
        
    </div>
  )
}

export default FooterList