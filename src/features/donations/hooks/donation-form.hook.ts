import { useMutation, useQueryClient } from "react-query";
import { postApi } from "@utils/api";
import { AxiosError, AxiosResponse } from "axios";

export const  useDonationForm = (reset: any) => {
    const queryClient = useQueryClient();
    const donationForm = (data: any) => {
      return postApi("donations", {...data, totalDonated: Number.parseInt(data.totalDonated)});
    }
    return useMutation(donationForm,
    {
      onSuccess: (result: AxiosResponse) => {
          console.log(result);
          if(result.status === 201) {
            reset();
            queryClient.invalidateQueries(["user-profile"]);
          } 
      },
      onError: (error: AxiosError) => {
        console.log(error?.response);
      }
    })
}
