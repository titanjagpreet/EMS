import React from 'react'

export default function NewTask({ data }) {

    return (
        <>
            <div className='flex-shrink-0 h-full w-[300px] !p-5 bg-gradient-to-tl from-[#16a34a] via-[#4ade80] to-[#bbf7d0] rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm !px-3 !py-1 rounded'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='!mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm !mt-2'>
                    {data.taskDescription}
                </p>
                <div className='!mt-6'>
                    <button className='bg-blue-500 rounded font-medium !py-1 !px-2 text-sm cursor-pointer'>Accept Task</button>
                </div>
            </div>
        </>
    )
}