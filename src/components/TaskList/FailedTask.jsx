import React from 'react'

export default function FailedTask({data}) {

    return (
        <>
            <div className='flex-shrink-0 h-full w-[300px] !p-5 bg-gradient-to-r from-amber-200 to-yellow-500 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm !px-3 !py-1 rounded'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='!mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm !mt-2'>
                    {data.taskDescription}
                </p>
                <div className='!mt-6'>
                    <button className='w-full bg-red-500 rounded font-medium !py-1 !px-2 text-sm cursor-pointer'>Failed</button>
                </div>
            </div>
        </>
    )
}

