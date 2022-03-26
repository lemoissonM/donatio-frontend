import { useMutation, useQueryClient } from "react-query";
import { deleteApi } from "@utils/api";
import { AxiosError, AxiosResponse } from "axios";

export const  useDeleteItem = () => {
    const queryClient = useQueryClient();
    const saveItem = (id: string) => {
      return deleteApi(`savedNeeds/${id}`);
    }
    return useMutation(saveItem,
    {
      onSuccess: (result: AxiosResponse) => {     
        queryClient.invalidateQueries("need-list-saved");
        return result.data
      },
      onError: (error: AxiosError) => {
        console.log(error?.response);
      }
    })
}
