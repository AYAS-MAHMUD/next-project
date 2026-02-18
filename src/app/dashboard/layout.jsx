import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <div className='grid grid-cols-12 bg-amber-300'>
            <div className='col-span-3 bg-cyan-700 text-2xl text-center p-5 min-h-screen'>
                <Link href={"/dashboard"}>Dashboard Layout</Link>
                <div className='flex flex-col gap-5 mt-7'>
                    <Link href={"/dashboard/add-story"}>Add Story</Link>
                    <Link href={"/dashboard/my-profile"}>My Profile</Link>
                    <Link href={"/dashboard/my-story"}>My Story</Link>
                </div>
            </div>
            <div className='col-span-9'>{children}</div>
        </div>
    </div>
    
  )
}

export default layout