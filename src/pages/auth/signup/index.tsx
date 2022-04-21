import Input from '@features/ui/Input';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import imageSignup from '@assets/images/auth-image.svg';
import { MailIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import validators from './validators';
import Button from '@features/ui/Button';
import { useSignup } from './hooks/signup.hook';

interface IFormInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const Signup: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const navigate = useNavigate();
  const mutation = useSignup(navigate);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutation.mutate({
      password: data.password,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      passwordConfirmation: data.password,
    });
  };

  const errorMessage = mutation.error?.isAxiosError
    ? mutation?.error?.response?.data?.message?.[0]
    : 'An error happened';

  return (
    <div className="w-full h-full flex flex-col justify-center items-center md:px-5">
      <div className="flex md:flex-row tablet:flex-col tablet:items-center tablet:w-full md:justify-between sm:p-10">
        <h1 className="text-blue text-xl tablet:hidden md:hidden font-semibold text-center mb-5 mt-5">
          Donatio
        </h1>
        <div className="mr-10 h-full tablet:hidden">
          <h1 className="text-blue text-xl font-semibold mb-16 mt-5">Donatio</h1>
          <img src={imageSignup} className="mt-5" />
        </div>
        <div className="md:w-[55%] tablet:w-[70%]  sm:w-full h-full bg-primary-200 rounded-[15px] px-5 py-10">
          <h1 className="text-blue text-xl font-semibold text-center">Signup</h1>
          {mutation.error ? (
            <div className="bg-[#FB1278] text-white text-sm text-center py-2 rounded-[5px] my-2">
              {errorMessage}
            </div>
          ) : null}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex md:flex-row tablet:flex-col">
              <Input
                name="firstName"
                register={register}
                validator={validators['firstname']}
                label="First name"
                placeholder="Your first name here"
                style="md:mt-10 tablet:mt-5 w-[50%]"
                icon={<UserCircleIcon width={22} height={22} className="text-primary-900 mr-5" />}
              />
              <Input
                name="lastName"
                register={register}
                validator={validators['lastName']}
                label="Last name"
                placeholder="Your last name"
                style="md:mt-10 tablet:mt-5 w-[50%]"
              />
            </div>
            <Input
              type="email"
              name="email"
              register={register}
              validator={validators['email']}
              label="Email"
              placeholder="Your email here"
              style="md:mt-9 tablet:mt-4"
              icon={<MailIcon width={22} height={22} className="text-primary-900 mr-5" />}
            />
            <Input
              type="password"
              name="password"
              register={register}
              validator={validators['password']}
              label="Password"
              placeholder="Your password here"
              style="md:mt-9 tablet:mt-4"
              icon={<LockClosedIcon width={22} height={22} className="text-primary-900 mr-5" />}
            />

            <div className="px-5 pt-10">
              <Button
                isLoading={mutation.isLoading}
                height="h-[40px]"
                label="Submit"
                backgroundColor="primary-900"
                textColor="white"
                width="w-full"
                isSubmit
              />
            </div>
          </form>
          <div className="flex flex-row justify-between"></div>
          <div className="flex flex-col justify-center items-center mt-5">
            <a href="/login" className="text-primary-900 text-center text-sm">
              Already have an account?, Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
