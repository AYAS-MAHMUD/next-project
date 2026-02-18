"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Nablink from './Nablink';

const Nabar = () => {
    const pathName = usePathname();
    // console.log(pathName)
    // if(pathName.startsWith("/dashboard")) return null;
    if(pathName.includes("/dashboard")) return <></>;
  return (
    <div className='p-4 bg-cyan-400 flex items-center justify-between px-10'>
        <Link href={"/"} className='text-3xl font-bold text-cyan-800'>Ayas</Link>
        <div className='flex gap-10 text-lg text-black '>
            <Nablink href="/stories">Story</Nablink>
            <Nablink href="/tutorial">Tutorial</Nablink>
            <Nablink href="/login">Login</Nablink>
            <Nablink href="/register">Register</Nablink>
        </div>
    </div>
  )
}

export default Nabar