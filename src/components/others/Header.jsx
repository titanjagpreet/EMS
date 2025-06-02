import React from 'react'

export default function Header(props) {

    function logOutUser() {
        localStorage.setItem('loggedInUser','');
        props.changeUser('');
    }

    return (
        <>
            <div className='flex items-end justify-between '>
                <h1 className='text-white text-2xl '>
                    Hello <br /> 
                    <span className='text-3xl font-semibold'>
                        {props.role === 'admin' ? 'Admin' : `${props.data?.firstName}`} 👋
                    </span>
                </h1>

                <button className='text-white text-lg bg-red-500 !px-5 !py-2 rounded-xl cursor-pointer ' onClick={logOutUser}>
                    Logout
                </button>
            </div>
        </>
    )
}