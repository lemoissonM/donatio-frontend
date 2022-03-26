import React from "react";
import Input from "@features/ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
// import { useNeedForm } from "./hooks/donation-form.hook";
import Select from "@features/ui/Select";
import { useUserGroup } from "@features/user-groups/hooks/get-list.hook";
import Button from "@features/ui/Button";
import { useCreateNeed } from "./hooks/create-item.hook";
import { Dialog } from "@headlessui/react";
import TextArea from "@features/ui/TextArea";
import FileUpload from "@features/ui/FileUpload";


interface IFormInput {
    needId: string,
    totalNeeded: number,
    imgUrl: any,
}

type NeedFormType = {
    needId?: string,
    close?: Function,
    isShowing?: boolean 
}

const NeedForm: React.FC<NeedFormType> = (props) => {
    const { register, handleSubmit, reset, watch  } = useForm<IFormInput>();
    const resetForm = () => {
        reset();
        props.close?.()
    }
    const mutation = useCreateNeed();
    const watchImage = watch('imgUrl');

    const onSubmit: SubmitHandler<IFormInput> = async data => {
        mutation.mutate(data);
    }

    return (
        <div className={`fixed inset-0 overflow-y-auto  flex flex-col justify-center transition-all delay-700 ease-linear bg-opacity-50 bg-primary-200  ${!props.isShowing ? "scale-0 bg-primary-200 z-30" : "z-30"} `}>
            <form onSubmit={handleSubmit(onSubmit)} className={`w-[40%] drop-shadow-lg bg-primary-200 rounded-[15px] h-fit mx-auto p-5 mt-50 sm:mb-10 transition-transform ease-out delay-700 ${!props.isShowing ? "-translate-y-[1000px]" : "translate-y-0"}`}>
            <h1 className="mx-5 tablet:mx-2 font-semibold mb-5 text-lg">Create Need</h1>
            <div className="md:grid md:grid-cols-2 gap-3">
                <Input register={register} name="title" label="Title" placeholder="Your title here" />
                <Input register={register} name="totalNeeded" label="Total Needed" placeholder="Your amount here" />
                <div className="mt-0 col-span-2">
                    <TextArea register={register} name="description" label="Description" placeholder="Your description here" />
                </div>
                <div className="mt-0 col-span-2">
                    <FileUpload register={register} name="imgUrl" value={ watchImage?.[0] ? window.URL.createObjectURL(watchImage[0]) : ''} label="Image" placeholder="Image" />
                </div>
                <input {...register('needId')} name="needId" hidden  value={props.needId} />
            </div>
            <div className="md:grid md:grid-cols-2 gap-3">
                    <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:mx-5 tablet:ml-5 sm:ml-1 tablet:w-[40%] sm:w-[97%] border-secondary-900   border-[1px]  text-secondary-900 rounded-[15px] mt-[20px] h-[40px] hover:bg-secondary-900 hover:border-2 hover:text-white" onClick={()=>{
                        props?.close?.()
                    }}>Cancel</button>
                    <Button isSubmit isLoading={mutation.isLoading} backgroundColor="primary-900" label={mutation.isLoading ? "Submitting" : "Submit"} height="h-[40px] mt-[20px] md:mx-5" textColor="white" />
                </div>
            </form>
        </div>
    )
}

export default NeedForm