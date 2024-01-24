import { PlatformData } from '@/utils/platform'
import React from 'react'
import { useDarkMode } from '@/context/DarkModeContext'

interface PlatformRatesProps {
    currentDisplay: number
}

const PlatformRates: React.FC<PlatformRatesProps> = ({currentDisplay}) => {
    const { isDarkMode } = useDarkMode()
    return (
        <div className='flex flex-col gap-5'>
            {PlatformData?.slice(0, currentDisplay)?.map((data, index) => (
                <div key={index} className='flex flex-col gap-4'>
                    <h2 className={`text-[18px] font-semibold ${isDarkMode ? 'text-textdark-200' : 'text-textlight-600'}`}>{data.name}</h2>
                    <div className={`w-full h-3 ${isDarkMode ? 'bg-grey' : 'bg-gray-500'} rounded-[40px]`}>
                        <div className='rounded-[40px] h-full' style={{background: data.color, width: data.width}}></div>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-[18px] text-textlight-550'>{data.amount}</p>
                        <p className='text-[18px] text-textlight-550'>{data.rate}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PlatformRates