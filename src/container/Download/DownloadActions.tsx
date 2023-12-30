import { applestore, playstore } from '@/_shared/assets/icons'
import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const DownloadActions = () => {
  return (
    <div className="flex flex-row space-x-[0.62rem] mt-[0.88rem]">
        <Button
            variant="text"
            className="bg-white [&.MuiButtonBase-root]:h-[38.363px]  w-[auto] px-0 flex justify-center items-center gap-x-2"
        >
            <Image
                height={38.363}
                className="object-fill"
                width={135}
                src={applestore}
                alt="applestore_icon"
            />
        </Button>
        <Button
            variant="text"
            className="bg-white [&.MuiButtonBase-root]:h-[38.363px]  w-[auto] px-0 flex justify-center items-center gap-x-2"
        >
            <Image
                height={38.363}
                className="object-fill"
                width={135}
                src={playstore}
                alt="playstore_icon"
            />
        </Button>
    </div>
  )
}

export default DownloadActions