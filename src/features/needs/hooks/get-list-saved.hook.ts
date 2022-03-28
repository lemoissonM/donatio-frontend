import { useQuery } from "react-query";
import { api } from "@utils/api";
import { SavedNeed } from "../types/saved-need";
import makeToast, { defaultOptions } from "@utils/toast";

export const  useSavedNeeds = () => {
    return useQuery("need-list-saved", async (): Promise<Array<SavedNeed>> => {
      const data = await api.savedNeeds()
      if(Array.isArray(data)) return data;
      makeToast.error('Failed to fetch saved needs !', defaultOptions)
      throw new Error('Failed to fetch need list')
    });
}
