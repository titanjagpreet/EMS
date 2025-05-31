import React from 'react'

export default function TaskData({data}) {

    return (
        <>
            <div className='flex !mt-10 justify-between gap-5 screen'>

                <div className='!py-5 !px-10 w-[45%] bg-[#478AE4] rounded-2xl'>

                    <h2 className='text-3xl text-white font-semibold'>
                        {data.taskCounts.newTask}
                    </h2>

                    <h3 className='text-xl text-white font-medium '>
                        New Task
                    </h3>
                </div>

                <div className='!py-5 !px-10 w-[45%] bg-[#A9C070] rounded-2xl'>

                    <h2 className='text-3xl text-white font-semibold'>
                        {data.taskCounts.completedTask}
                    </h2>

                    <h3 className='text-xl text-white font-medium '>
                        Completed Task
                    </h3>
                </div>

                <div className='!py-5 !px-10 w-[45%] bg-[#F5CF5F] rounded-2xl'>

                    <h2 className='text-3xl text-white font-semibold'>
                        {data.taskCounts.acceptedTask}
                    </h2>

                    <h3 className='text-xl text-white font-medium '>
                        Accepted Task
                    </h3>
                </div>

                <div className='!py-5 !px-10 w-[45%] bg-[#C7734E] rounded-2xl'>

                    <h2 className='text-3xl text-white font-semibold'>
                        {data.taskCounts.failedTask}
                    </h2>

                    <h3 className='text-xl text-white font-medium '>
                        Failed Task
                    </h3>
                </div>

            </div>
        </>
    )
}
