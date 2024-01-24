import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/svg/Vector.svg'
import Board from '@/assets/svg/category.svg'
import Trend from '@/assets/svg/trend-up.svg'
import Profile from '@/assets/svg/profile-2user.svg'
import Box from '@/assets/svg/box.svg'
import Discount from '@/assets/svg/discount-shape.svg'
import Info from '@/assets/svg/info-circle.svg'
import LightSwitcher from './LightSwitcher'
import Arrow from '@/assets/svg/arrow-right.svg'
import Setting from '@/assets/svg/setting-2.svg'
import Logout from '@/assets/svg/logout.svg'
import Slide from '@/assets/svg/slide.svg'
import { useDarkMode } from '@/context/DarkModeContext'

export default function Aside() {
    const { isDarkMode } = useDarkMode()
    return (
        <aside className={`py-5 w-20 overflow-y-hidden ${isDarkMode ? 'bg-darkcard' : 'bg-sidebar'} desktop:fixed desktop:block hidden`}>
            <div className='h-[95vh] flex flex-col w-full justify-between items-center'>
                <div className='flex flex-col gap-5 items-center'>
                    <Image src={Logo} alt='logo' />
                    <div className='flex flex-col gap-4 p-2'>
                        <div className=''>
                            <div className='desktop:absolute desktop:block hidden left-[75px]'>
                                {isDarkMode ? (
                                    <div className='mt-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="21" viewBox="0 0 3 21" fill="none">
                                            <path d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z" fill="#34CAA5"/>
                                        </svg>
                                    </div>
                                ): (
                                    <Image src={Slide} alt='dashboard' className='mt-2'/>
                                )}
                            </div>
                            <div className='p-2 flex justify-center cursor-pointer'>
                                {isDarkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z" fill="#34CAA5"/>
                                        <path opacity="0.4" d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z" fill="#34CAA5"/>
                                        <path d="M18.6699 13.4301H16.7699C14.5899 13.4301 13.4399 14.5801 13.4399 16.7601V18.6601C13.4399 20.8401 14.5899 21.9901 16.7699 21.9901H18.6699C20.8499 21.9901 21.9999 20.8401 21.9999 18.6601V16.7601C21.9999 14.5801 20.8499 13.4301 18.6699 13.4301Z" fill="#34CAA5"/>
                                        <path opacity="0.4" d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z" fill="#34CAA5"/>
                                    </svg>
                                ) : (
                                    <Image src={Board} alt='dashboard' />
                                )}
                            </div>
                        </div>
                        <div className='p-2 flex justify-center cursor-pointer'>
                            <Image src={Trend} alt='logo' />
                        </div>
                        <div className='p-2 flex justify-center cursor-pointer'>
                            <Image src={Profile} alt='logo' />
                        </div>
                        <div className='p-2 flex justify-center cursor-pointer'>
                            <Image src={Box} alt='logo' />
                        </div>
                        <div className='p-2 flex justify-center cursor-pointer'>
                            <Image src={Discount} alt='logo' />
                        </div>
                        <div className='p-2 flex justify-center cursor-pointer'>
                            <Image src={Info} alt='logo' />
                        </div>
                        <div className='p-2 flex justify-center cursor-pointer'>
                            <LightSwitcher />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='p-2 flex justify-center cursor-pointer'>
                        <Image src={Arrow} alt='logo' />
                    </div>
                    <div className='p-2 flex justify-center cursor-pointer'>
                        <Image src={Setting} alt='logo' />
                    </div>
                    <div className='p-2 flex justify-center cursor-pointer'>
                        <Image src={Logout} alt='logo' />
                    </div>
                </div>
            </div>
        </aside>
    )
}
