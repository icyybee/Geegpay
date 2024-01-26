"use client"

import React, { ReactNode } from 'react';
import { Drawer } from 'antd';

interface DrawerBoxProps {
    children: ReactNode,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DrawerBox: React.FC<DrawerBoxProps> = ({open, setOpen, children}) => {
    const onClose = () => {
        setOpen(false);
    };

  return (
    <Drawer
        title="Basic Drawer"
        placement={'left'}
        closable={false}
        onClose={onClose}
        open={open}
        key={'left'}
    >
        {children}
    </Drawer>
  );
};

export default DrawerBox;