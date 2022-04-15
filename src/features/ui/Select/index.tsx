import React, { ReactNode } from 'react';
import ReactSelect from 'react-select';

interface IOption {
  value: string;
  label: string;
}

type Props = {
  label: string;
  placeholder: string;
  style?: string;
  icon?: ReactNode;
  register?: any;
  name: string;
  validator?: any;
  type?: string;
  options: IOption[];
  defaultValue?: string;
  setValue?: any;
};

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    height: '40px',
    color: state.isSelected ? '#fff' : '#1278FB',
    paddingTop: 10,
    backgroundColor: state.isSelected ? '#1278FB' : '#DFEDFF',
    zIndex: 10,
  }),
  control: () => ({
    width: '100%',
    display: 'flex',
    height: '45px',
    zIndex: 100,
  }),
  menuList: (provided: any) => ({
    ...provided,
    backgroundColor: '#DFEDFF',
  }),
  menuPortal: (provided: any) => ({
    ...provided,
    borderRadius: 15,
  }),
};

const Select: React.FC<Props> = (props: Props) => {
  const {
    label,
    placeholder,
    style,
    icon,
    register,
    name,
    validator,
    type,
    options,
    defaultValue,
  } = props;
  return (
    <div className={`px-5 sm:px-2 sm:mb-5 ${style}`}>
      <div className="text-blue sm:text-sm flex flex-row">
        {icon}
        <span>{label} </span>
      </div>
      <div className="bg-primary-300 px-2 mt-2 rounded-[15px]">
        {props.setValue ? (
          <ReactSelect
            onChange={(e) => {
              props.setValue(props.name, e?.value);
            }}
            options={props.options}
            styles={customStyles}
          />
        ) : (
          <select
            type={type || 'text'}
            {...register(name, validator)}
            className="text-sm px-4 py-2 bg-transparent sm:p-3 w-full mt-1 "
            placeholder={placeholder}
            defaultValue={defaultValue}
          >
            {options.map((o) => (
              <option className="text-blue bg-primary-300" value={o.value} key={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default Select;
