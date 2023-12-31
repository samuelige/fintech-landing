import React from 'react'

const ServiceList = () => {
    const ListItem: String[] = [
        `Instant free fee transaction`,
        `Saving money for future use`,
        `How to plan your budget `,
        `Business investment opportunities`
    ]
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.19rem] mt-[3.06rem]'>
        {
            ListItem?.map((item, index) => (
                <li className='text-black-100 rounded-lg h-[18.0625rem] flex flex-col justify-between pt-[1.5rem] pr-[1.0625rem] pb-[1.625rem] pl-[1.0625rem] bg-gray-25' key={index}>
                    <p className='text-sm font-medium w-[8.9375rem]'>{item}</p>
                    <p className='underline hover:cursor-pointer'>Read more</p>
                </li>
            ))
        }
        <li></li>
    </ul>
  )
}

export default ServiceList