import React from 'react';

const AuthLayout: React.FC = (props) => (
  <main className="flex flex-col sm:mt-1 h-full lg:mx-5 md:mx-0 md:mr-2 w-full sm:w-[100%] sm:px-[20px] tablet:pr-3">
    {props.children}
  </main>
);

export default AuthLayout;
