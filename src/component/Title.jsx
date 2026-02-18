import React from 'react'

const Title = ({children}) => {
  return (
    <div className='text-4xl p-10 bg-linear-60 from-fuchsia-500 to-fuchsia-300'>
        {children}
    </div>
  )
}

export default Title