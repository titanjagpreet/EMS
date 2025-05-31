import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

export default function AdminDashboard({data}) {

    return (
        <>
            <div className='!p-10 bg-[#111111] h-screen '>
                <Header data={data} role='admin' />
                <CreateTask data={data} />
                <AllTask data={data} />
            </div>
        </>
    )
}