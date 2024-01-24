import React from 'react'
import { useDarkMode } from '@/context/DarkModeContext'

export default function CardFour() {
    const { isDarkMode } = useDarkMode()
    return (
        <div className={`p-4 ${isDarkMode ? 'bg-darkcard border-textdark-200' : 'bg-white border-gray-200'} border rounded-[14px] flex gap-[10px] flex-col`}>
            <div className='flex items-center justify-between w-full'>
                <div className='size-10 border-[0.714px] border-gray-400 rounded-full flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.4" d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z" fill="#34CAA5"/>
                        <path d="M21.9701 15.99C21.9701 19.29 19.2901 21.97 15.9901 21.97C13.9501 21.97 12.1601 20.95 11.0801 19.4C15.4401 18.91 18.9101 15.44 19.4001 11.08C20.9501 12.16 21.9701 13.95 21.9701 15.99Z" fill="#34CAA5"/>
                        <path d="M11.45 9.71003L9.05 8.87003C8.81 8.79003 8.76 8.77003 8.76 8.42003C8.76 8.16003 8.94 7.95003 9.17 7.95003H10.67C10.99 7.95003 11.25 8.24003 11.25 8.60003C11.25 9.01003 11.59 9.35003 12 9.35003C12.41 9.35003 12.75 9.01003 12.75 8.60003C12.75 7.45003 11.86 6.51003 10.75 6.46003V6.41003C10.75 6.00003 10.41 5.66003 10 5.66003C9.59 5.66003 9.25 5.99003 9.25 6.41003V6.46003H9.16C8.11 6.46003 7.25 7.34003 7.25 8.43003C7.25 9.38003 7.67 9.99003 8.54 10.29L10.95 11.13C11.19 11.21 11.24 11.23 11.24 11.58C11.24 11.84 11.06 12.05 10.83 12.05H9.33C9.01 12.05 8.75 11.76 8.75 11.4C8.75 10.99 8.41 10.65 8 10.65C7.59 10.65 7.25 10.99 7.25 11.4C7.25 12.55 8.14 13.49 9.25 13.54V13.6C9.25 14.01 9.59 14.35 10 14.35C10.41 14.35 10.75 14.01 10.75 13.6V13.55H10.84C11.89 13.55 12.75 12.67 12.75 11.58C12.75 10.63 12.32 10.02 11.45 9.71003Z" fill="#34CAA5"/>
                    </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="33" viewBox="0 0 106 33" fill="none">
                    <path d="M102.994 8.46666H105V33L1 33V11.4536L4.00877 18.9203L5.20413 21.9069H6.60551L9.40827 18.9203L11.3702 21.907L17.256 21.9072L20.339 18.9204L22.0207 14.4396L24.4683 16.6803L26.6747 18.9203L27.3638 22.3333L28.7651 21.9069H30.4858L33.6952 11.4536L34.6981 14.4403L36.3028 11.4536L37.5063 16.6803L40.7156 7.72028L42.5209 11.4536H45.9308L49.5413 3.98696L51.7477 7.72028L54.6535 5.48L58.194 11.4533L60.4704 1L62.1179 11.4533L73.1072 15.9333L74.5113 12.9466H75.9153L79.1247 8.46666H82.334L83.5375 12.9466L88.3515 3.98666L90.3574 15.9333L91.3603 11.4533H93.5667L95.5726 1L97.5784 9.95999L98.5813 5.48H101.189L102.994 8.46666Z" fill="url(#paint0_linear_2132_4599)" fill-opacity="0.16"/>
                    <path d="M105 8.4667H102.994L101.189 5.48004H98.5813L97.5784 9.96003L95.5726 1.00004L93.5667 11.4534H91.3603L90.3574 15.9333L88.3515 3.9867L83.5375 12.9467L82.334 8.4667H79.1247L75.9153 12.9467H74.5113L73.1072 15.9333L62.1179 11.4534L60.4704 1.00004L58.194 11.4534L54.6535 5.48004L51.7477 7.72032L49.5413 3.987L45.9308 11.4536H42.5209L40.7156 7.72032L37.5063 16.6803L36.3028 11.4536L34.6981 14.4403L33.6952 11.4536L30.4858 21.907H28.7651L27.3638 22.3334L26.6747 18.9203L24.4683 16.6803L22.0206 14.4396L20.339 18.9204L17.256 21.9073L11.3702 21.907L9.40827 18.9203L6.60551 21.907H5.20414L4.00877 18.9203L1 11.4536" stroke="#66C87B" stroke-linecap="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_2132_4599" x1="53" y1="33" x2="53" y2="1" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#77B900" stop-opacity="0"/>
                        <stop offset="0.809892" stop-color="#77B900"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='flex flex-col gap-[5px]'>
                <h2 className='text-[18px] font-medium text-textlight-400'>Total Income</h2>
                <h3 className='text-2xl font-semibold text-textlight-300'>$350.000</h3>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center rounded-full px-2 py-1 bg-[#34caa51f]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5" stroke="#34CAA5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 0.5H9.5V4" stroke="#34CAA5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='text-xs text-primary font-medium'>23.5%</p>
                </div>
                <p className='font-inter text-sm text-textlight-500'>vs. previous month</p>
            </div>
        </div>
    )
}
