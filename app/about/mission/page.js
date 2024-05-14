import Button from '@/app/components/Button'
import React from 'react'
import thumb from '@/public/images/rnext-thumb.png'
import Image from 'next/image'
export default function Mission() {
  return (
    <main className='mt-10'>
        <div>Mission page</div>
        <p> 
        
        
        </p>
        <Image placeholder='blur'  src={thumb} alt='Thumb image' />
        <Button />
       
    </main>
  )
}
