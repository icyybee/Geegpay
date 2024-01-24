"use client"

import React, { Fragment, useState } from 'react'
import { useDarkMode } from '@/context/DarkModeContext'
import { Menu, Transition } from '@headlessui/react'

export default function SelectTime() {
    const { isDarkMode } = useDarkMode()
    const [selectedTime, setSelectedTime] = useState('Weekly')

    return (
        <Menu as="div" className="relative">
            <Menu.Button className="rounded-[20px] border border-gray-300 py-[6px] px-3 flex gap-[10px] items-center">
                <p className={`${isDarkMode ? 'text-textdark-200' : 'text-textlight-300'} text-xs`}>{selectedTime}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z" fill={`${isDarkMode ? '#737373' : 'black'}`}/>
                </svg>
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
                    <Menu.Items className={`px-5 py-2 select__time cursor-pointer absolute right-0 mt-2 w-[200px] origin-top-right rounded-md ${isDarkMode ? 'notify' : 'bg-white'} shadow-lg ring-1 ring-black/5 focus:outline-none flex flex-col gap-2`}>
                        <Menu.Item>
                            <p className={`${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'} text-sm`} onClick={() => setSelectedTime('Daily')}>Daily</p>
                        </Menu.Item>
                        <Menu.Item>
                            <p className={`${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'} text-sm`} onClick={() => setSelectedTime('Weekly')}>Weekly</p>
                        </Menu.Item>
                        <Menu.Item>
                            <p className={`${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'} text-sm`} onClick={() => setSelectedTime('Monthly')}>Monthly</p>
                        </Menu.Item>
                        <Menu.Item>
                            <p className={`${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'} text-sm`} onClick={() => setSelectedTime('Yearly')}>Yearly</p>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
        </Menu>
    )
}
