import React from "react"
import { ChartProps, Chart } from "@features/ui/Chart"
import { useChartData } from "./hooks/chart.hook"
import { LoadingIcon } from "@features/ui/Loader/Icon"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: false,
            text: "Chart.js Bar Chart",
        },
    },
    scales: {
        y: {
            grid: {
                display: false,
            },
        },
        x: {
            grid: {
                display: false,
            }
        }
    }

}

const DashboardChart: React.FC = () => {
    const chart = useChartData();
    const monthArray = [];

    for(let i = 0; i < 6; i++) {
        const date  = new Date();
        date.setMonth(date.getMonth() - i);
        monthArray.push(date.getMonth());
    }

    const chartData: ChartProps = {
        data: {
            labels: monthArray.map(month => months[month]).reverse(),
            datasets: [
                     {
                         label: "Total",
                         backgroundColor: "#FDC781",
                         data: monthArray.map(m => chart?.data?.[0]?.find((item: any) => item.month === m + 1)?.sum || 0).reverse(),
                     },
                     {
                         label: "Used",
                         backgroundColor: "#88B9F6",
                         data: monthArray.map(m => chart?.data?.[1]?.find((item: any) => item.month === m + 1)?.sum || 0).reverse(),
                     },
             ],
        },
        options
     
     }
    return (
        <div className="bg-secondary-100 w-full p-5 rounded-[15px]">
            {chart.data && <Chart {...chartData} />}
            {chart.isLoading && <div className="flex flex-col items-center justify-center">
                <LoadingIcon height={40} />
                <p className="text-sm text-secondary-900">Loading chart data</p>
            </div>}
        </div>
    )
}

export default DashboardChart
