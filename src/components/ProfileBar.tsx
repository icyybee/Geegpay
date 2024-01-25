import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useDarkMode } from '@/context/DarkModeContext'
import Profile from '@/assets/img/profile.png'

export default function ProfileBar() {
    const { isDarkMode } = useDarkMode()
    return (
        <Menu as="div" className="relative">
            <Menu.Button className='w-[215px] cursor-pointer flex gap-3 justify-center items-center border border-gray-100 rounded-[28px] py-[6px] px-2'>
                <div className='flex items-center gap-2'>
                    <Image src={Profile} alt='profile' className='w-9 h-9 object-contain' />
                    <div className='flex flex-col gap-1'>
                        <h3 className={`text-right ${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'}  text-[16px] font-inter`}>Justin Bergson</h3>
                        <h3 className='text-textlight-100 text-sm font-inter'>Justin@gmail.com</h3>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill={`${isDarkMode ? "#B7B0B0" : "#0D062D"}`}/>
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
                <Menu.Items className={`select__time cursor-pointer absolute right-0 mt-2 w-[220px] origin-top-right rounded-md ${isDarkMode ? 'notify' : 'bg-white'} shadow-lg ring-1 ring-black/5 focus:outline-none flex flex-col gap-2`}>
                    <div className="pt-[15px] px-5 ">
                        <Menu.Item>
                            <div className='flex items-center gap-2'>
                                <Image src={Profile} alt='profile' className='w-8 h-8 object-contain' />
                                <div className='flex flex-col'>
                                    <h3 className={`${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'}  text-[16px] font-inter`}>Justin Bergson</h3>
                                    <h3 className='text-textlight-100 text-sm font-inter'>Justin@gmail.com</h3>
                                </div>
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div className='mt-3 flex items-center justify-between mb-3'>
                                <p className={`${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'} text-sm font-medium`}>Profile</p>
                            </div>    
                        </Menu.Item>
                        <Menu.Item>
                            <div className='mt-3 flex items-center justify-between mb-3'>
                                <p className={`${isDarkMode ? 'text-textdark-100' : 'text-textlight-200'} text-sm font-medium`}>Settings</p>
                            </div>    
                        </Menu.Item>
                        <Menu.Item>
                            <div className='mt-3 flex items-center justify-between mb-3'>
                                <p className={`${isDarkMode ? 'text-textdark-100' : 'text-error'} text-sm font-medium`}>Logout</p>
                            </div>    
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
