import Input from '@features/ui/Input';
import React from 'react';
import imageReset from '@assets/images/auth-image.svg';
import { MailIcon, LockClosedIcon } from '@heroicons/react/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import validators from './validators';
import Button from '@features/ui/Button';
import { useReset } from './hooks/reset.hook';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
  email: string;
}

const ResetPassword: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<IFormInput>();
  const history = useNavigate();
  const mutation = useReset(history);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutation.mutate(data);
  };

  const email = watch('email');

  const errorMessage = mutation.error?.isAxiosError
    ? mutation?.error?.response?.data?.message
    : 'An error happened';

  return (
    <div className="w-full h-full flex flex-col justify-center items-center md:px-5 sm:px-2">
      <div className="flex md:flex-row tablet:flex-col tablet:items-center tablet:w-full md:justify-between sm:p-2">
        <h1 className="text-blue text-xl tablet:hidden md:hidden font-semibold text-center mb-5 mt-5">
          Donatio
        </h1>
        <div className="mr-10 h-full tablet:hidden">
          <h1 className="text-blue text-xl font-semibold mb-16 mt-5">Donatio</h1>
          <img src={imageReset} className="mt-5" />
        </div>
        <div className="md:w-[65%] tablet:w-[70%]  sm:w-full h-full bg-primary-200 rounded-[15px] px-5 py-10">
          <h1 className="text-blue text-xl font-semibold text-center">Reset Password</h1>
          {mutation.error ? (
            <div className="bg-[#FB1278] text-white text-sm text-center py-2 rounded-[5px] my-2">
              {errorMessage}
            </div>
          ) : null}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-items-center content-center itemce"
          >
            <Input
              type="email"
              name="email"
              register={register}
              validator={validators['email']}
              label="Email"
              placeholder="Your email here"
              style="md:mt-10 tablet:mt-5 mb-10"
              icon={<MailIcon width={22} height={22} className="text-primary-900 mr-5" />}
            />
            <div className="px-5">
              <Button
                isLoading={mutation.isLoading}
                label={mutation.isLoading ? 'Submitting' : 'Submit'}
                backgroundColor="primary-900"
                height="h-[40px]"
                textColor="white"
                width="w-full"
                isSubmit
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
