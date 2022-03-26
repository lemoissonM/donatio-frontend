import React, { ReactNode } from "react"

type Props = {
    label: string,
    placeholder: string,
    style?: string,
    icon?: ReactNode,
    register: any,
    name: string,
    validator?: any,
    type?: string,
}

const Input: React.FC<Props> = (props: Props) => {
    const { label, placeholder, style, icon, register, name, validator, type } = props
    return (
        <div className={`px-5 sm:px-2 sm:mb-5 ${style}`}>
            <div className="text-blue sm:text-sm flex flex-row">{icon}<span>{ label } </span></div>
            <input type={type || 'text'} {...register(name, validator)} className='bg-primary-300 text-sm p-3  sm:p-3 w-full mt-2 rounded-[15px]' placeholder={placeholder}></input>
        </div>
    )
}

export default Input;