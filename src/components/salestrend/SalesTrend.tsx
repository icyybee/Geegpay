"use client"

import React, { useState, useEffect } from 'react'
import { ApexOptions } from 'apexcharts';
import { formatNumberWithPeriods } from '@/utils/helperFunc';
import { useDarkMode } from '@/context/DarkModeContext';
import SelectTime from '../SelectTime';


interface SalesTrendState {
    series: {
        data: number[],
        colors: string[]
    }[];
}


const SalesTrend: React.FC = (props:any) => {
    const [Chart, setChart] = useState<any>()
    const hasType = typeof props?.type !== "undefined";

    useEffect(() => {
        import("react-apexcharts").then((mod) => {
            setChart(() => mod.default);
        })
        .catch((error) => {
            console.error("Error loading react-apexcharts:", error);
        });
    }, []);

    const { isDarkMode } = useDarkMode()
    const [state, setState] = useState<SalesTrendState>({
        series: [
            {
                data: [14000, 24000, 8000, 33000, 16000, 45000, 16000, 27000, 37000, 10000, 35000, 31000],
                colors: ['#34caa51a', '#4caf50', '#2196f3', '#ff5722', '#e91e63', '#ff9800', '#9c27b0', '#795548', '#607d8b', '#673ab7', '#3f51b5', '#00bcd4'],
            }
        ]
    })
    
    const options: ApexOptions = {
        colors: state.series[0].colors,
        chart: {
            fontFamily: 'Plus Jakarta Sans',
            type: 'bar',
            height: 280,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
                columnWidth: '30px',
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'last',
            },
        },
        dataLabels: {
            enabled: false,
        },
        
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
        },
        yaxis: {
            labels: {
                formatter: (val) => {
                    return formatNumberWithPeriods(val);
                },            
                style: {
                    fontSize: '12px',
                    colors: '#737373',
                    fontWeight: 600,
                    fontFamily: 'Plus Jakarta Sans'
                },
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            fontSize: '14px',
            
            markers: {
                radius: 99,
                strokeColor: '#737373'
            },
        },
        fill: {
            opacity: 1,
        },
    };
    
    return (
        <div className={`desktop:flex-1 desktop:w-auto w-full ${isDarkMode ? 'bg-darkcard' : 'bg-white'} rounded-[14px] border-gray-200 py-4 tab:px-5 px-3 flex flex-col gap-4`}>
            <div className='w-full flex justify-between items-center'>
                <h1 className={`text-[18px] font-semibold ${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'}`}>Sales Trends</h1>
                <div className='flex gap-[10px] items-center'>
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-textdark-200' : 'text-textlight-300'}`}>Short by : </p>
                    <SelectTime />
                </div>
            </div>
            <div>
                {Chart && 
                    <Chart 
                        options={options}
                        series={state.series}
                        type="bar"
                        height={280}
                    />
                }   
            </div>
        </div>
    )
}

export default SalesTrend
