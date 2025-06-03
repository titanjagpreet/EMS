import { useState } from "react";

export default function CreateTask() {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const [newTask, setNewTask] = useState({});

    function submitHandler(e) {
        e.preventDefault();

        const task = {
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle,
            taskDescription,
            taskDate,
            category,
            assignTo
        };

        setNewTask(task);

        const data = JSON.parse(localStorage.getItem('employees'));

        let found = false;
        data.forEach(function (elem) {
            if (assignTo === elem.firstName) {
                elem.tasks.push(task);
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
                found = true;
            }
        });

        if (!found) {
            alert("Enter correct Assignee");
            return;
        }

        localStorage.setItem('employees', JSON.stringify(data));

        setTaskTitle('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
        setTaskDescription('');
    }

    return (
        <>
            <div className='!p-5 bg-[#1c1c1c] !mt-5 rounded'>

                <form className='flex flex-wrap w-full items-start justify-between' onSubmit={(e) => submitHandler(e)}>

                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-[16px] text-gray-200 !mb-0.5'>
                                Task Title
                            </h3>
                            <input className='text-sm !py-1 !px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 !mb-4 placeholder:text-gray-400 text-white' type="text" placeholder='Make a UI design' value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
                        </div>

                        <div>
                            <h3 className='text-[16px] text-gray-200 !mb-0.5'>
                                Date
                            </h3>
                            <input className='text-sm !py-1 !px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 !mb-4 placeholder:text-gray-400 text-white' type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
                        </div>

                        <div>
                            <h3 className='text-[16px] text-gray-200 !mb-0.5'>
                                Asign to
                            </h3>
                            <input className='text-sm !py-1 !px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 !mb-4 placeholder:text-gray-400 text-white' type="text" placeholder='employee name' value={assignTo} onChange={(e) => setAssignTo(e.target.value)} />
                        </div>

                        <div>
                            <h3 className='text-[16px] text-gray-200 !mb-0.5'>
                                Category
                            </h3>
                            <input className='text-sm !py-1 !px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 !mb-4 placeholder:text-gray-400 text-white' type="text" placeholder='design, dev, etc' value={category} onChange={(e) => setCategory(e.target.value)} />
                        </div>

                    </div>

                    <div className='w-2/5 flex flex-col items-start'>

                        <h3 className='text-[16px] text-gray-200 !mb-0.5'>
                            Description
                        </h3>
                        <textarea className='w-full h-44 text-sm text-white !py-2 !px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 ' name="" id="" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>

                        <button className='bg-emerald-500 !py-3 hover:bg-emerald-600 cursor-pointer !px-5 rounded text-[17px] text-gray-200 !mb-0.5 !mt-4 w-full'>
                            Create Task
                        </button>
                    </div>

                </form>
            </div>

        </>
    )
}