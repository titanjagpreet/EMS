import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

export default function AdminDashboard(props) {

    return (
        <>
            <div className='!px-10 !py-8 bg-[#111111] h-screen '>
                <Header changeUser={props.changeUser} data={props.data} role={props.role} />
                <CreateTask data={props.data} />
                <AllTask data={props.data} />
            </div>
        </>
    )
}