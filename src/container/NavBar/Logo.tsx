import React from 'react'
import Image from 'next/image'
import { logo } from '@/_shared/assets/icons'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
        <Image
            src={logo}
            width={120}
            height={27}
            alt='logo-icon'
        />
    </Link>
  )
}

export default Logo