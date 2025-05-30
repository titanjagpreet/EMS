import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

export default function AdminDashboard() {

    return (
        <>
            <div className='!p-10 bg-[#111111] h-screen '>
                <Header />
                <CreateTask/>
                <AllTask/>
            </div>
        </>
    )
}