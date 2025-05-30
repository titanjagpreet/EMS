export default function CreateTask() {

    return (
        <>
            <div className='!p-5 bg-[#1c1c1c] !mt-5 rounded'>

                <form className='flex flex-wrap w-full items-start justify-between'>

                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-[16px] text-gray-200 !mb-0.5'>
                                Task Title
                            </h3>
                            <input className='text-sm !py-1 !px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 !mb-4 placeholder:text-gray-400' type="text" placeholder='Make a UI design'
                            />
                        </div>
                        <div>
                            <h3 className='text-[16px] text-gray-200 !mb-0.5'>
                                Date
                            </h3>
                            <input className='text-sm !py-1 !px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 !mb-4 placeholder:text-gray-400' type="date" />
                        </div>
                        <div>
                            <h3 className='text-[16px] text-gray-200 !mb-0.5'>
                                Asign to
                            </h3>
                            <input className='text-sm !py-1 !px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 !mb-4 placeholder:text-gray-400' type="text" placeholder='employee name' />
                        </div>
                        <div>
                            <h3 className='text-[16px] text-gray-200 !mb-0.5'>
                                Category
                            </h3>
                            <input className='text-sm !py-1 !px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 !mb-4 placeholder:text-gray-400' type="text" placeholder='design, dev, etc' />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-[16px] text-gray-200 !mb-0.5'>
                            Description
                        </h3>
                        <textarea className='w-full h-44 text-sm text-white !py-2 !px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>

                        <button className='bg-emerald-500 !py-3 hover:bg-emerald-600 cursor-pointer !px-5 rounded text-[17px] text-gray-200 !mb-0.5 !mt-4 w-full'>
                            Create Task
                        </button>
                    </div>

                </form>
            </div>
            
        </>
    )
}