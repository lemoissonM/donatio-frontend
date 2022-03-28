import Input from "@features/ui/Input"
import React from "react"
import imageLogin from "@assets/images/auth-image.svg"
import { MailIcon, LockClosedIcon } from "@heroicons/react/solid"
import { useForm, SubmitHandler } from "react-hook-form";
import validators from "./validators";
import Button from "@features/ui/Button";
import { useLogin } from "./hooks/login.hook";
import { useNavigate } from "react-router-dom";

interface IFormInput {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const history = useNavigate();
    const mutation = useLogin(history);
    const onSubmit: SubmitHandler<IFormInput> = data => {
        mutation.mutate(data);
    }

    const errorMessage = mutation.error?.isAxiosError ? mutation?.error?.response?.data?.message  :  'An error happened';


    return (
        <div className="w-full h-full flex flex-col justify-center items-center md:px-5 sm:px-2">
            <div className="flex md:flex-row tablet:flex-col tablet:items-center tablet:w-full md:justify-between sm:p-2">
            <h1 className="text-blue text-xl tablet:hidden md:hidden font-semibold text-center mb-5 mt-5">Donatio</h1>
                <div className="mr-10 h-full tablet:hidden">
                    <h1 className="text-blue text-xl font-semibold mb-16 mt-5">Donatio</h1>
                    <img src={imageLogin} className="mt-5"  />
                </div>
                <div className="md:w-[65%] tablet:w-[70%]  sm:w-full h-full bg-primary-200 rounded-[15px] px-5 py-10">
                    <h1 className="text-blue text-xl font-semibold text-center">Login</h1>
                    {mutation.error ? <div className="bg-[#FB1278] text-white text-sm text-center py-2 rounded-[5px] my-2">{errorMessage}</div> : null}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type="email" name="email" register={register} validator={validators['email']} label="Email" placeholder="Your email here" style="md:mt-10 tablet:mt-5" icon={<MailIcon width={22} height={22} className="text-primary-900 mr-5" />}  />
                        <Input type="password" name="password" register={register} validator={validators['password']} label="Password" placeholder="Your password here" style="md:mt-9 tablet:mt-4" icon={<LockClosedIcon width={22} height={22} className="text-primary-900 mr-5" />} />

                        <p className="w-full text-right tablet:p-5 md:p-5 sm:pb-4 sm:px-3 text-blue sm:text-sm">Forgot your password ?</p>
                        <div className="px-5">
                            <Button isLoading={mutation.isLoading} label={mutation.isLoading ? "Submitting" : "Submit"} backgroundColor="primary-900" height="h-[40px]" textColor="white" width="w-full" isSubmit />
                        </div>
                    </form>
                    <div className="flex flex-row justify-between">
                    
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <a href="/signup" className="text-primary-900 text-center text-sm">No account?, Signup</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Login