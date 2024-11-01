import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
      <Link href='/' className='md:flex-1'>
        <div className='flex flex-row items-center'>
          <Image 
            src='/assets/icons/logo-icon.svg'
            alt='Logo'
            width={32}
            height={32}
            className='mr-2 md:hidden'
          />
          <Image 
            src='/assets/icons/logo-icon.svg'
            alt='Logo'
            width={32}
            height={32}
            className='hidden md:block'
            />
          <h1 className='text-md font-bold'>SyncWrite</h1>
        </div>
      </Link>
      {children}
    </div>
  )
}

export default Header