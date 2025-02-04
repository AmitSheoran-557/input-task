import React from 'react'
import { HandIcon } from '../utils/icons'

const CustomButton = (props) => {
    return (
        <button className={`${props.className} flex gap-2.5 shadow-3xl bg-gradient lg:text-2xl text-xl border hover:border-transparent transition-all ease-linear duration-300 border-white lg:py-[14px] text-white rounded-[79px] !leading-[100%] py-3 lg:px-[34px] px-6`}><span className={`${props.iconClassName} hidden`}>< HandIcon /></span>{props.title}</button>
    )
}

export default CustomButton