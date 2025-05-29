import React from 'react'
import Header from '../others/Header'
import TaskData from '../others/TaskData'
import TaskList from '../TaskList/TaskList'

export default function EmployeeDashboard() {

    return (
        <>
            <div className='!p-10 bg-[#1C1C1C] h-screen '>
                <Header/>
                <TaskData/>
                <TaskList/>
            </div>
        </>
    )
}