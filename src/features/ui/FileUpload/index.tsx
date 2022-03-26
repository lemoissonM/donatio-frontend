import { ChevronDownIcon } from "@heroicons/react/solid"
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
    value?: any
}

const FileUpload: React.FC<Props> = (props: Props) => {
    const { label, placeholder, style, icon, register, name, validator, type, value} = props
    return (
        <div className={`px-5 sm:px-2 sm:mb-5 ${style}`}>
            <div className="text-blue sm:text-sm flex flex-row">{icon}<span>{ label } </span></div>
                <div>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-blue border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {!value ? <svg
                          className="mx-auto h-12 w-12 text-blue"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg> : <img src={value} className="mx-auto h-12 w-12 text-blue rounded-5" />}
                        <div className="flex text-sm  text-blue">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer text-blue bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span className="text-primary-900">Upload a file</span>
                            <input id="file-upload" {...register(name)} type="file" className="sr-only" />
                          </label>
                          <p className="pl-1 text-blue">or drag and drop</p>
                        </div>
                        <p className="text-xs text-blue">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
            </div>
        </div>
    )
}

export default FileUpload;