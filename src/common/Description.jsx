import React from 'react'

const Description = (props) => {
  return (
   <p className={`${props.className} font-medium lg:text-2xl text-xl text-white opacity-[70%] font-poppins`}>{props.description}</p>
  )
}

export default Description