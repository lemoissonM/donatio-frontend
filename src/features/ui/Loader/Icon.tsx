import React from 'react';
import './animate.css';

type PropTypes = {
  backgroundColor?: string;
  height?: number;
};

export const LoadingIcon: React.FC<PropTypes> = (props) => {
  const { height = 60, backgroundColor = 'primary-900' } = props;
  let fill = 'fill-primary-900';
  if (backgroundColor === 'white') fill = 'fill-white';
  if (backgroundColor === 'secondary') fill = 'fill-secondary-900';
  if (backgroundColor === 'primary') fill = 'fill-primary-900';

  return (
    <svg
      width={height}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className={`w-[100%] ${fill} opacity-50`} id="circle1" cx="60" cy="60" r="60" />
      <circle className={`w-[100%] ${fill} opacity-50`} id="circle2" cx="60" cy="60" r="60" />
    </svg>
  );
};
