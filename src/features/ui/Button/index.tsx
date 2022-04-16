import React, { ReactNode } from 'react';
import { LoadingIcon } from '../Loader/Icon';
import './animation.css';

type Props = {
  label: string;
  isSubmit?: boolean;
  onClick?: any;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  icon?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  type?: string;
};

const Button: React.FC<Props> = (props: Props) => {
  const {
    label,
    isSubmit,
    onClick,
    backgroundColor,
    textColor,
    width,
    height,
    isLoading,
    type = 'primary',
  } = props;
  if (isSubmit)
    return (
      <div
        className={`${width} ${height} flex justify-center items-center content-center bg-${backgroundColor} rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10`}
      >
        <div
          className={`flex flex-row content-center justify-around ${!isLoading ? 'w-full' : ''}`}
        >
          <input
            type="submit"
            className={`h-full w-full cursor-pointer font-normal  text-${textColor} font-semibold `}
            value={label}
          />
          {isLoading && (
            <div className="z-20 w-[30px] my-auto ml-2">
              <LoadingIcon backgroundColor="white" height={20} />
            </div>
          )}
        </div>
      </div>
    );

  return (
    <button
      className={` flex flex-row items-center content-center justify-center transition z-20 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 bg-${backgroundColor} text-white rounded-[15px] ${width} h-[40px] hover:border-${textColor} hover:border-2`}
      onClick={onClick}
    >
      {label}
      {isLoading && (
        <div className="z-20 w-[30px] my-auto ml-2">
          <LoadingIcon backgroundColor="white" height={20} />
        </div>
      )}
    </button>
  );
};

export default Button;
