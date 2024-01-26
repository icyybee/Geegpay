"use client"

import React, { useState } from 'react'
import { useDarkMode } from '@/context/DarkModeContext'
import Menu from './Menu'

export default function Aside() {
    const { isDarkMode } = useDarkMode()
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    return (
        <aside className={`py-5 w-20 overflow-y-hidden ${isDarkMode ? 'bg-darkcard' : 'bg-sidebar'} mids:fixed mids:block hidden`}>
            <Menu setOpenDrawer={setOpenDrawer}/>
        </aside>
    )
}
