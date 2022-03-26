import { useMutation } from "react-query";
import { postApi } from "@utils/api";
import { AxiosError, AxiosResponse } from "axios";

export const  useSignup = (navigate:any) => {
    const signup = (data: any) => {
      return postApi("auth/register", data);
    }
    return useMutation(signup,
    {
      onSuccess: (result: AxiosResponse) => {
          if(result.status === 201) {
            localStorage.setItem('token', result?.data?.accessToken);
            navigate('/')
            window.location.reload()
        } 
      },
      onError: (error: AxiosError) => {
        console.log(error?.response?.data)
      }
    })
}
