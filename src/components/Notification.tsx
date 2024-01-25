"use client"

import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Bell from '@/assets/svg/solar_bell-outline.svg'
import { useDarkMode } from '@/context/DarkModeContext'
import Image from 'next/image'

export default function Notification() {
    const { isDarkMode } = useDarkMode()
    
    return (
        <Menu as="div" className="relative">
            <Menu.Button className='cursor-pointer flex justify-center items-center size-10 border-[0.769px] border-gray-100 rounded-[27px] p-[11px]'>
                {isDarkMode ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z" fill="#B7B0B0"/>
                    </svg>
                : 
                    <Image src={Bell} alt='notify' />
                }
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={`z-[9999] absolute right-0 mt-1 mids:w-[482px] tab:w-[350px] w-[200px] origin-top-right rounded-md ${isDarkMode ? 'notify' : 'bg-white'} shadow-lg ring-1 ring-black/5 focus:outline-none`}>
                    <div className="tab:pt-[15px]">
                        <Menu.Item>
                            <div className='px-5 tab:flex hidden items-center justify-between mb-3'>
                                <p className={`${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'} text-[18px] font-medium`}>Notifications</p>
                                <div className={`border size-10 -mt-1 rounded-lg ${isDarkMode ? 'border-grey' : 'border-[#F7F7F7]'} cursor-pointer flex justify-center items-center`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M6 6L18 18M6 18L18 6L6 18Z" stroke={`${isDarkMode ? '#B2ABAB' : '#111827'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </Menu.Item> 
                        <hr className={`tab:block hidden ${isDarkMode ? 'bg-grey' : 'bg-[#F7F7F7]'}`}/>
                        <div className='p-6 flex justify-center items-center'>
                            <p className={`${isDarkMode && 'text-textdark-100'}`}>No Notifications!</p>
                        </div>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
