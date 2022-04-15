import React from 'react';
import Input from '@features/ui/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDonationForm } from './hooks/donation-form.hook';
import Select from '@features/ui/Select';
import { useUserGroup } from '@features/user-groups/hooks/get-list.hook';
import Button from '@features/ui/Button';

enum DonationTypes {
  group = 'group',
  individual = 'individual',
}
interface IFormInput {
  needId?: string;
  totalDonated: number;
  donationType: DonationTypes;
}

type DonationFormType = {
  needId?: string;
  close?: any;
  isShowing?: boolean;
};

const paiementOptions = [
  { value: 'stripe', label: 'Stripe' },
  { value: 'ubPay', label: 'UB-PAY (Mobile RDC)' },
];

const DonationForm: React.FC<DonationFormType> = (props) => {
  const { register, handleSubmit, reset, watch, setValue } = useForm<IFormInput>();
  const resetForm = () => {
    reset();
    props.close?.();
  };
  const mutation = useDonationForm(resetForm);
  const { data: groups } = useUserGroup();
  const isGroup = watch('donationType') === DonationTypes.group;

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-primary-200 rounded-[15px] p-5 mt-10 sm:mb-10"
    >
      <h1 className="mx-5 tablet:mx-2 font-semibold mb-5 text-lg">Make a donation</h1>
      <div className="md:grid md:grid-cols-2 gap-3">
        <Input
          register={register}
          name="totalDonated"
          label="Amount"
          placeholder="Your amount here"
        />
        <Select
          register={register}
          name="donationType"
          label="Type"
          placeholder="Your type here"
          options={[
            { value: 'individual', label: 'Individual' },
            { value: 'group', label: 'In a group' },
          ]}
          setValue={setValue}
        />
        {isGroup && (
          <Select
            register={register}
            name="groupId"
            label="Groupe"
            placeholder="Select the group"
            options={
              groups?.map((g) => {
                return { value: g.id, label: g.name };
              }) || []
            }
            setValue={setValue}
          />
        )}
        <Select
          register={register}
          name="paiementWay"
          label="Paiement Way"
          placeholder="Select your paiement way"
          options={paiementOptions}
          setValue={setValue}
        />
        {props.needId && (
          <input {...register('needId')} name="needId" hidden value={props.needId} />
        )}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:mx-5 tablet:ml-5 sm:ml-1 tablet:w-[40%] sm:w-[97%] border-secondary-900   border-[1px]  text-secondary-900 rounded-[15px] mt-[20px] h-[40px] hover:bg-secondary-900 hover:border-2 hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            props?.close?.();
          }}
        >
          Cancel
        </button>
        <Button
          isSubmit
          isLoading={mutation.isLoading}
          backgroundColor="primary-900"
          label={mutation.isLoading ? 'Submitting' : 'Submit'}
          height="h-[40px] mt-[20px] md:mx-5"
          textColor="white"
        />
      </div>
    </form>
  );
};

export default DonationForm;
