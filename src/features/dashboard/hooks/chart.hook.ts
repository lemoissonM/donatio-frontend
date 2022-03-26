import { useQuery } from "react-query";
import { api } from "@utils/api";

export const  useChartData = () => {
    return useQuery("chart-data", async (): Promise<any> => {
      const data = await api.donations('chartData')
      console.log(data, 'data');
      if(Array.isArray(data)) return data;
      throw new Error('Failed to fetch need list')
    });
}
