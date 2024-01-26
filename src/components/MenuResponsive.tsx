"use client"

import React from 'react'
import Menu from './Menu'

interface MenuResponsiveProps {
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuResponsive: React.FC<MenuResponsiveProps> = ({setOpenDrawer}) => {
    return (
        <div>
            <Menu setOpenDrawer={setOpenDrawer} />
        </div>
    )
}

export default MenuResponsive;