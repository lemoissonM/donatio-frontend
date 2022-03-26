import { useQuery } from "react-query";
import { api } from "@utils/api";
import { UserGroup } from "../types/user-group";

export const  useUserGroup = () => {
    return useQuery("user-groups-list", async (): Promise<Array<UserGroup>> => {
      const data = await api.userGroups()
      if(Array.isArray(data)) return data;
      throw new Error('Failed to fetch need list')
    });
}
