import React from 'react';
import { LoadingIcon } from './Icon';

type PropTypes = {
  backgroundColor?: string;
  height?: number;
};

export const Loading: React.FC<PropTypes> = () => {
  return (
    <div className="absolute w-full h-full flex justify-center">
      <div className=" flex justify-center flex-col items-center">
        <LoadingIcon height={100} />
        <div>
          <p className="text-center max-w-[400px] text-lg text-[#6B6E75] mt-8">
            I have found that among its other benefits, giving liberates the soul of the giver
          </p>
          <p className="text-center mt-2 text-sm font-bold">Maya Angelou</p>
        </div>
      </div>
    </div>
  );
};
