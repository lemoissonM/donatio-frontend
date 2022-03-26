import { useQuery } from "react-query";
import { api } from "@utils/api";
import { Need } from "../types/need";

export const  useNeeds = () => {
    return useQuery("need-list", async (): Promise<Array<Need>> => {
      const data = await api.needs()
      if(Array.isArray(data)) return data;
      throw new Error('Failed to fetch need list')
    });
}
