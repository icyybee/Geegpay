"use client"

import React, { useState } from 'react'
import OrderTable from './OrderTable'
import { useDarkMode } from '@/context/DarkModeContext'

export default function LastOrders() {
  const { isDarkMode } = useDarkMode()
  const [currentDisplay, setCurrentDisplay] = useState<number>(5);

  return (
    <div className={`tab:flex-1 w-full px-5 pt-[18px] pb-[3px] ${isDarkMode ? 'bg-darkcard' : 'bg-white'} h-fit rounded-[14px] border-gray-200 flex flex-col gap-[14px]`}>
      <div className='w-full flex justify-between items-center'>
        <h1 className={`tab:text-[18px] font-semibold ${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'}`}>Last Orders</h1>
        {currentDisplay === 10 ? (
          <p onClick={() => setCurrentDisplay(5)} className='tab:text-[18px] font-medium text-primary cursor-pointer'>See Less</p>  
        ) : (
          <p onClick={() => setCurrentDisplay(10)} className='tab:text-[18px] font-medium text-primary cursor-pointer'>See All</p>
        )}
      </div>
      <div className='w-full overflow-scroll'>
        <OrderTable currentDisplay={currentDisplay} />
      </div>
    </div>
  )
}
