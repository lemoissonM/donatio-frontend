import { useMutation, useQueryClient } from "react-query";
import { postApi, uploadImage } from "@utils/api";
import { AxiosError, AxiosResponse } from "axios";

export const  useCreateNeed = () => {
    const queryClient = useQueryClient();  
    const saveItem = async (data: any) => {
      const img = await uploadImage(data.imgUrl[0]);
      return postApi("needs", {...data, imgUrl: img.data.url, totalNeeded: Number.parseInt(data.totalNeeded)});
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
