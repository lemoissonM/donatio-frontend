import React from "react";
import './animate.css';

type PropTypes = {
    backgroundColor?: string,
    height?: number
}

export const LoadingIcon: React.FC<PropTypes> = (props) => {
    const {backgroundColor="primary-900", height=60} = props;
    return (
        <svg width="120"  height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className={`w-[100%] fill-primary-900 opacity-50`} id="circle1"  cx="60" cy="60" r="60"/>
          <circle className={`w-[100%] fill-primary-900 opacity-50`} id="circle2" cx="60" cy="60" r="60"/>
        </svg>
    )
}