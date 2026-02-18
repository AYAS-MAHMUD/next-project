import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nablink = ({href,children}) => {
    // console.log(href , children)
    const pathName = usePathname();
    
  return (
 
      <Link className={`${pathName.startsWith(href) && "bg-cyan-600 px-3 py-2"}`} href={href}>{children}</Link>
    
  )
}

export default Nablink