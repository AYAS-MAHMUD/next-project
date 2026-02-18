import React from 'react'

const page =  ({params}) => {
    const {slug} =  params;
    console.log(slug)
  return (
    <div>
         <h1>Catch-all Slug</h1>
      <p>{slug.join(" / ")}</p>
    </div>
  )
}

export default page


// hiting this url : http://localhost:3000/tutorial/ayas/riax/mohi/rahi