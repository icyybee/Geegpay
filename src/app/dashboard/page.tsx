import Analysis from '@/components/analysis/Analysis'
import LastOrders from '@/components/lastorders/LastOrders'
import SalesTrend from '@/components/salestrend/SalesTrend'
import TopPlatform from '@/components/topplatform/TopPlatform'
import React from 'react'

export default function Dashboard() {
    return (
        <div className='mt-5 px-5 w-full flex flex-col gap-5'>
            <div className='flex gap-5 w-full items-center'>
                <SalesTrend />
                <Analysis />
            </div>
            <div className='flex w-full gap-5'>
                <LastOrders />
                <TopPlatform />
            </div>
        </div>
    )
}
