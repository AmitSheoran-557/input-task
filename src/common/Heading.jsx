import React from 'react'

const Heading = (props) => {
  return (
    <h2 className={`${props.className} font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl`}>{props.title}</h2>
  )
}

export default Heading