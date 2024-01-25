"use client"

import React, { ReactNode } from 'react';
import { Modal } from 'antd';
import { useDarkMode } from '@/context/DarkModeContext';

interface ModalBoxProps {
    children: ReactNode,
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleDownload: () => void
}

const ModalBox: React.FC<ModalBoxProps> = ({children, isModalOpen, setIsModalOpen, handleDownload}) => {
    const { isDarkMode } = useDarkMode()
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal 
            title="My Invoice"
            closeIcon={false}
            centered
            footer={[
                <button key={"cancel"} className={`border ${isDarkMode && 'border-[#262626]'} p-2 rounded-lg`} onClick={handleCancel}>
                  Cancel
                </button>,
                <button key={"download"} className={`border ${isDarkMode && 'border-[#262626]'} p-2 rounded-lg flex items-center gap-1`} onClick={handleDownload}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V9C19 8.46957 18.7893 7.96086 18.4142 7.58579C18.0391 7.21071 17.5304 7 17 7H3C2.46957 7 1.96086 7.21071 1.58579 7.58579C1.21071 7.96086 1 8.46957 1 9V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15H5" stroke={`${isDarkMode ? '#B2ABAB' : '#111827'}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 7V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H7C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V7" stroke={`${isDarkMode ? '#B2ABAB' : '#111827'}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13 11H7C5.89543 11 5 11.8954 5 13V17C5 18.1046 5.89543 19 7 19H13C14.1046 19 15 18.1046 15 17V13C15 11.8954 14.1046 11 13 11Z" stroke={`${isDarkMode ? '#B2ABAB' : '#111827'}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Download</p>
                </button>
            ]}
            onOk={handleCancel} 
            open={isModalOpen} 
            onCancel={handleCancel}
        >
            {children}
        </Modal>
    );
};

export default ModalBox;