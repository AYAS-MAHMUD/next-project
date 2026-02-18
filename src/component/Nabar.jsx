import Link from 'next/link'
import React from 'react'

const Nabar = () => {
  return (
    <div className='p-4 bg-cyan-400 flex items-center justify-between px-10'>
        <Link href={"/"} className='text-3xl font-bold text-cyan-800'>Ayas</Link>
        <div className='space-x-3 text-black'>
            <Link href="/stories">Story</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </div>
    </div>
  )
}

export default Nabar