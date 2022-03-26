import { useMutation, useQueryClient } from "react-query";
import { postApi } from "@utils/api";
import { AxiosError, AxiosResponse } from "axios";

export const  useSaveItem = () => {
    const queryClient = useQueryClient();  
    const saveItem = (data: any) => {
      return postApi("savedNeeds", {...data});
    }
    return useMutation(saveItem,
    {
      onSuccess: (result: AxiosResponse) => {
          if(result.status === 201) {
            queryClient.invalidateQueries(["savedNeeds"]);
            return result.data
          } 
      },
      onError: (error: AxiosError) => {
        console.log(error?.response);
      }
    })
}
