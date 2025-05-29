import React from 'react'
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email is ", email);
        console.log("Password is ", password);

        setEmail("");
        setPassword("");
    }

    return (
        <>
            <div className='flex items-center justify-center h-screen w-full'>

                <div className='border-2 rounded-xl !p-20 border-emerald-600'>

                    <form action="" onSubmit={(e) => {submitHandler(e)}} className='flex flex-col items-center justify-center'>

                        <input required type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter your email' className='text-black text-xl outline-none border-2 border-emerald-600 rounded-full !py-3 !px-5 bg-transparent placeholder:text-gray-500 ' />

                        <input required type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter password' className='text-black text-xl outline-none border-2 border-emerald-600 rounded-full !py-3 !px-5 bg-transparent !mt-3 placeholder:text-gray-500 ' />

                        <button className='text-black text-xl outline-none border-none bg-emerald-600 rounded-full !py-3 !px-5 !mt-3 w-full cursor-pointer'>
                            Login
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}