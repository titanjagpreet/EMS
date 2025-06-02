import React from 'react'
import Header from '../others/Header'
import TaskData from '../others/TaskData'
import TaskList from '../TaskList/TaskList'

export default function EmployeeDashboard(props) {

    return (
        <>
            <div className='!px-10 !py-8 bg-[#1C1C1C] h-screen '>
                <Header changeUser={props.changeUser} data={props.data} role={props.role}/>
                <TaskData data={props.data} />
                <TaskList data={props.data} />
            </div>
        </>
    )
}