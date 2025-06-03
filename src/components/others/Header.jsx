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
                    <span className='bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent font-semibold text-3xl'>
                        {props.role === 'admin' ? 'Admin' : `${props.data?.firstName}`}
                    </span>
                    👋
                </h1>

                <button className='text-white text-lg bg-red-500 !px-5 !py-2 rounded-xl cursor-pointer ' onClick={logOutUser}>
                    Logout
                </button>
            </div>
        </>
    )
}