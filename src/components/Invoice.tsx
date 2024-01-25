import React from 'react'

interface InvoiceProps{
    name: string,
    date: string,
    status: string,
    amount: string
}

const Invoice: React.FC<InvoiceProps> = ({ name, date, status, amount }) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-1'>
                <h3 className='font-medium'>Name:</h3>
                <p className='text-sm'>{name}</p>
            </div>
            <div className='flex items-center gap-1'>
                <h3 className='font-medium'>Date:</h3>
                <p className='text-sm'>{date}</p>
            </div>
            <div className='flex items-center gap-1'>
                <h3 className='font-medium'>Status:</h3>
                <p className='text-sm'>{status}</p>
            </div>
            <div className='flex items-center gap-1'>
                <h3 className='font-medium'>Amount:</h3>
                <p className='text-sm'>{amount}</p>
            </div>
        </div>
    )
}

export default Invoice