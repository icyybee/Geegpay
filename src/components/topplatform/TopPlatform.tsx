"use client"

import React, { useState } from 'react'
import PlatformRates from './PlatformRates'
import { useDarkMode } from '@/context/DarkModeContext'

export default function TopPlatform() {
    const { isDarkMode } = useDarkMode()
    const [currentDisplay, setCurrentDisplay] = useState<number>(4);
    
    return (
        <div className={`w-[40%] px-5 py-4 h-[490px] overflow-y-scroll ${isDarkMode ? 'bg-darkcard' : 'bg-white'} rounded-[14px] border-gray-200 flex flex-col gap-5`}>
            <div className='w-full flex justify-between items-center'>
                <h1 className={`text-[18px] font-semibold ${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'}`}>Top Platform</h1>
                {currentDisplay === 7 ? (
                    <p onClick={() => setCurrentDisplay(4)} className='text-[18px] font-medium text-primary cursor-pointer'>See Less</p>  
                ) : (
                    <p onClick={() => setCurrentDisplay(7)} className='text-[18px] font-medium text-primary cursor-pointer'>See All</p>
                )}
            </div>
            <PlatformRates currentDisplay={currentDisplay}/>
        </div>
    )
}
