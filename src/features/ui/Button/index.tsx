import React, { ReactNode } from "react"
import { LoadingIcon } from "../Loader/Icon"
import "./animation.css"

type Props = {
    label: string,
    isSubmit?: boolean,
    onClick?: any,
    backgroundColor?: string,
    textColor?: string,
    borderColor?: string,
    borderWidth?: string,
    borderRadius?: string,
    width?: string,
    height?: string,
    icon?: ReactNode,
    children?: ReactNode,
    isLoading?: boolean,
    type?: string,
}


const Button: React.FC<Props> = (props: Props) => {
    const { label, isSubmit, onClick, backgroundColor, textColor, width, height, isLoading, type = 'primary'} = props
    if(isSubmit) return (
        <div className={`${width} ${height} ${isLoading ? type+"-color-animate" : ""} flex justify-center items-center content-center bg-${backgroundColor} rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10`}>
            <input type="submit" className={` z-10 h-full  cursor-pointer font-normal  text-${isLoading? 'primary-900' : textColor} font-semibold `} value={label} />
        </div>
    )

    return <button className={`transition z-20 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 bg-${backgroundColor} ${isLoading ? type+"-color-animate" : ""} text-white rounded-[15px] ${width} h-[40px] hover:border-${textColor} hover:border-2`} onClick={onClick}>
             {label}
           </button>
}

export default Button;