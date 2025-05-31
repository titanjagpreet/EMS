import React from 'react'
import Header from '../others/Header'
import TaskData from '../others/TaskData'
import TaskList from '../TaskList/TaskList'

export default function EmployeeDashboard({data}) {

    return (
        <>
            <div className='!p-10 bg-[#1C1C1C] h-screen '>
                <Header data={data} role='employee' />
                <TaskData data={data} />
                <TaskList data={data} />
            </div>
        </>
    )
}