import React, { ReactNode } from 'react';

interface IOption {
  value: string;
  label: string;
}

type Props = {
  label: string;
  placeholder: string;
  style?: string;
  icon?: ReactNode;
  register: any;
  name: string;
  validator?: any;
  type?: string;
  options: IOption[];
};

const Select: React.FC<Props> = (props: Props) => {
  const { label, placeholder, style, icon, register, name, validator, type, options } = props;
  return (
    <div className={`px-5 sm:px-2 sm:mb-5 ${style}`}>
      <div className="text-blue sm:text-sm flex flex-row">
        {icon}
        <span>{label} </span>
      </div>
      <div className="bg-primary-300 px-2 mt-2 rounded-[15px]">
        <select
          type={type || 'text'}
          {...register(name, validator)}
          className="text-sm px-4 py-2 bg-transparent sm:p-3 w-full mt-1 "
          placeholder={placeholder}
        >
          {options.map((o) => (
            <option className="text-blue bg-primary-300" value={o.value} key={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
