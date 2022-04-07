import React, { ReactNode } from 'react';

type Props = {
  label: string;
  placeholder: string;
  style?: string;
  icon?: ReactNode;
  register: any;
  name: string;
  validator?: any;
  type?: string;
  rows?: number;
  defaultValue?: string;
};

const TextArea: React.FC<Props> = (props: Props) => {
  const {
    label,
    placeholder,
    style,
    icon,
    register,
    name,
    validator,
    type,
    rows = 2,
    defaultValue,
  } = props;
  return (
    <div className={`px-5 sm:px-2 sm:mb-5 ${style}`}>
      <div className="text-blue sm:text-sm flex flex-row">
        {icon}
        <span>{label} </span>
      </div>
      <textarea
        rows={rows}
        type={type || 'text'}
        {...register(name, validator)}
        className="bg-primary-300 text-sm p-3  sm:p-3 w-full mt-2 rounded-[15px]"
        placeholder={placeholder}
        defaultValue={defaultValue}
      ></textarea>
    </div>
  );
};

export default TextArea;
