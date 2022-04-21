import React, { useEffect } from 'react';
import { useVerify } from './hooks/verify.hook';
import { useNavigate } from 'react-router-dom';
import { LoadingIcon } from '@features/ui/Loader/Icon';

const Verify: React.FC = () => {
  const history = useNavigate();
  const mutation = useVerify(history);

  useEffect(() => {
    const verifyAccount = async () => {
      await mutation.mutate({});
    };
    verifyAccount();
  }, []);

  const errorMessage = mutation.error?.isAxiosError
    ? mutation?.error?.response?.data?.message
    : 'An error happened';

  return (
    <div className="absolute w-full h-full flex justify-center">
      <div className=" flex justify-center flex-col items-center">
        <LoadingIcon height={100} />
        <div>
          <p className="text-center max-w-[400px] text-lg text-[#6B6E75] mt-8">
            {!errorMessage ? 'Verifying your account' : errorMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
