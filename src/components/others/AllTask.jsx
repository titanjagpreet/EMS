import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

export default function AllTask() {

    const authData = useContext(AuthContext);

    return (
        <>
            <div className='bg-[#1c1c1c] !p-5 rounded !mt-5 text-white h-54 overflow-auto'>

                <div className='bg-red-400 !mb-2 !py-2 !px-4 flex justify-between rounded'>
                    <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                    <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                    <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                    <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                    <h5 className='text-lg font-medium w-1/5'>Failed</h5>
                </div>
                <div className=''>
                    {authData.employees.map(function (elem, idx) {
                        return (
                            <div key={idx} className='border-2 border-emerald-500 !mb-2 !py-2 !px-4 flex justify-between rounded'>
                                <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
                                <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts?.newTask || 0}</h3>
                                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts?.acceptedTask || 0}</h5>
                                <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts?.completedTask || 0}</h5>
                                <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts?.failedTask || 0}</h5>
                            </div>
                        );
                    })}

                </div>

            </div>
        </>
    )
}

