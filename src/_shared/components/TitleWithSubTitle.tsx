import React, { FC } from 'react'
import SubTitle from './SubTitle'
import Title from './Title';
import Image from 'next/image';

interface TitleWithSubTitleProps {
    title: string;
    subTitle: string;
    image: string;
}
const TitleWithSubTitle:FC<TitleWithSubTitleProps> = (props) => {
    const {title, subTitle, image} = props;
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between">
        <Title>{title}</Title>
        <Image
            src={image}
            width={ 226.025}
            height={12.365}
            alt='titleWithSubTitle-image'
            className='my-4 xl:my-0'
        />
        <SubTitle>{subTitle}</SubTitle>
    </div>
  )
}

export default TitleWithSubTitle