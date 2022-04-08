import React from 'react';
import Input from '@features/ui/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@features/ui/Button';
import TextArea from '@features/ui/TextArea';
import Select from '@features/ui/Select';
import { useUpdateProfileForm } from './hooks/upate-profile.hook';
import { User } from './types/user-type';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  countryName: string;
  role: string;
}

type ProfileFormType = {
  needId?: string;
  close?: any;
  isShowing?: boolean;
  user: User;
};

const ProfileForm: React.FC<ProfileFormType> = (props) => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const resetForm = () => {
    reset();
    props.close?.();
  };
  const mutation = useUpdateProfileForm(resetForm);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto  flex flex-col justify-center transition-all delay-700 ease-linear bg-opacity-50 bg-[#000]  ${
        !props.isShowing ? 'scale-0 bg-primary-200 z-30' : 'z-30'
      } `}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`md:w-[40%] sm:[95%] drop-shadow-lg bg-primary-200 rounded-[15px] h-fit mx-auto p-5 mt-50 sm:mb-10 transition-transform ease-out delay-700 ${
          !props.isShowing ? '-translate-y-[1000px]' : 'translate-y-0'
        }`}
      >
        <h1 className="mx-5 tablet:mx-2 font-semibold mb-5 text-lg">Update Profile</h1>
        <div className="md:grid md:grid-cols-2 gap-3">
          <Input
            register={register}
            name="firstName"
            label="First Name"
            placeholder="Your first here"
            defaultValue={props.user.firstName}
          />
          <Input
            register={register}
            name="lastName"
            label="Last Name"
            placeholder="Your last here"
            defaultValue={props.user.lastName}
          />
          <Input
            register={register}
            name="phoneNumber"
            label="Phone Number"
            placeholder="Your phone number here"
            defaultValue={props.user.phoneNumber}
          />
          <Select
            label="Profession"
            register={register}
            name="role"
            options={[]}
            placeholder="Select profession"
            defaultValue={props.user.role}
          />
          <Select
            label="Country"
            register={register}
            name="countryName"
            options={[]}
            placeholder="Select country"
            defaultValue={props.user.countryName}
          />
          <Select
            label="City"
            register={register}
            name="city"
            options={[]}
            placeholder="Select city"
            defaultValue={props.user.city}
          />
          <div className="mt-0 col-span-2">
            <Input
              register={register}
              name="monthlyObjectif"
              label="Monthly donation objective"
              placeholder="My monthly donation objective"
              type="number"
              defaultValue={props.user.monthlyObjective?.toString()}
            />
            <TextArea
              register={register}
              name="address"
              label="Full address"
              placeholder="Full address"
              style="mt-3"
              defaultValue={props.user.address}
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-3">
          <button
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:mx-5 tablet:ml-5 sm:ml-1 tablet:w-[40%] sm:w-[97%] border-secondary-900   border-[1px]  text-secondary-900 rounded-[15px] mt-[20px] h-[40px] hover:bg-secondary-900 hover:border-2 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              props.close?.();
              resetForm();
            }}
          >
            Cancel
          </button>
          <Button
            isSubmit
            isLoading={mutation.isLoading}
            backgroundColor="primary-900"
            label={mutation.isLoading ? 'Submitting ... ' : 'Submit'}
            height="h-[40px] mt-[20px] md:mx-5"
            textColor="white"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
