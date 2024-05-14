import Link from 'next/link'
import React from 'react'

export default function AboutLayout({children}) {
  return (
    <div>
        <nav className='mt-6 mb-6'><Link href="/about/mission">Mission</Link> || <Link href="/about/vision">Vision</Link></nav>
        {children}
    </div>
  )
}
