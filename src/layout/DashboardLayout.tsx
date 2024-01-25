"use client"

import Aside from '@/components/Aside'
import HeadBar from '@/components/HeadBar'
import React, { ReactNode} from 'react'
import { useDarkMode } from '@/context/DarkModeContext'

interface DashboardLayoutProps {
    children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const { isDarkMode } = useDarkMode()

    return (
        <div className={`w-full ${isDarkMode ? 'dark:bg-bgdark' : 'bg-bgwhite'} flex min-h-screen`}>
            <Aside />
            <div className='flex-1 mainbar'>
                <main className='w-full h-full flex flex-col'>
                    <HeadBar />
                    {!isDarkMode && (
                        <hr className='bg-divider w-full h-[1px]' />
                    )}
                    {children}
                </main>
            </div>
        </div>
    )
}
