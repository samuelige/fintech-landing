import React from 'react'
import Logo from '../NavBar/Logo'
import FooterList from './FooterList';
import SocialMediaList from './SocialMediaList';
import FooterField from './FooterField';

const Footer = () => {
    const companyList = {
        title: 'Company',
        navs: ["Products", "Features", "About", "Team"],
    };

    const supportList = {
        title: 'Support',
        navs: ["Terms and Conditions", "Privacy Policy", "Community", "Contact us"],
    };
  return (
    <div id="contact" className='w-full bg-white px-4 lg:px-8 xl-1:px-0'>
        <div className='w-full flex flex-col items-start justify-between xl-1:max-w-[77.59806rem] xl-1:m-auto border-t-[1px] border-t-gray-700 pt-10 pb-[3.75rem] '>
            <div className='w-full  xl-1:max-w-[64.94119rem] xl-1:m-auto xl:space-x-[5.06rem] flex flex-col xl:flex-row'>
                <section className='w-[23.5rem]'>
                    <Logo/>
                    <div className='space-y-[0.62rem] mt-[1.38rem]'>
                        <p>Customer service</p>
                        <p className='text-[0.8125rem]'>2/7 support by chat, email & calls</p>
                    </div>
                    <FooterField/>
                </section>
                <section className='w-full xl:flex-1 flex flex-col xl:flex-row justify-between'>
                    <FooterList
                        data={companyList}
                    />
                    <FooterList
                        data={supportList}
                    />
                    <div className='mt-8 flex flex-col xl:justify-center xl:mt-0'>
                        <SocialMediaList/>
                    </div>
                </section>
            </div>
        </div>
        
    </div>
  )
}

export default Footer