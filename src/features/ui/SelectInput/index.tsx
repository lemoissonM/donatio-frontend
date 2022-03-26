import { ChevronDownIcon } from "@heroicons/react/solid"
import React, { ReactNode } from "react"

interface IOption {
    value: string,
    label:  string
}

type Props = {
    label: string,
    placeholder: string,
    style?: string,
    icon?: ReactNode,
    register: any,
    name: string,
    validator?: any,
    type?: string,
    options: IOption[]
}

const SelectInput: React.FC<Props> = (props: Props) => {
    const { label, placeholder, style, icon, register, name, validator, type, options } = props
    return (
        <div className={`px-5 sm:px-2 sm:mb-5 ${style}`}>
            <div className="text-blue sm:text-sm flex flex-row">{icon}<span>{ label } </span></div>
            <datalist id={`${name}-list`}>
                {options.map(o => <option className="text-blue bg-primary-300" value={o.value} />)}
            </datalist>
            <input list={`${name}-list`} type={type || 'text'} {...register(name, validator)} className='bg-primary-300 text-sm p-3  sm:p-3 w-full mt-2 rounded-[15px]' placeholder={placeholder}></input>
        </div>
    )
}

export default SelectInput;