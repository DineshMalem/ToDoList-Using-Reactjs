import React from "react";
function TaskItem({ taskName, deleteTask, completeTask, isCompleted }) {
    return (
        <>
            <li className='task d-flex justify-content-between'>
                <b>
                    {taskName}
                </b>
                <div className='task-buttons w-50 mr-5 d-flex 
                justify-content-end'>
                    {!isCompleted && (
                    <button className="btn btn-sm btn-success me-2" onClick={() => completeTask(taskName)}>Complete</button>)}
                    
                    <button className='btn btn-sm btn-danger' onClick={() => { deleteTask(taskName, isCompleted)  }}>
                        Delete</button>
                </div>
            </li>
        </>
    )
}
export default TaskItem;
