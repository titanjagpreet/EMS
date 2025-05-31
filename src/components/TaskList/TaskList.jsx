import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

export default function TaskList({data}) {

    return (
        <>
            <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex items-center justify-start gap-3 flex-nowrap !mt-10 rounded-2xl !p-5'>

                {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}

            </div>
        </>
    )
}

