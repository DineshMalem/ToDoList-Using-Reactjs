import { useState } from 'react'
import './App.css';
import TaskItem from './Components/TaskItem';

function App() {

  const [newTask, setNewTask] = useState("");
  const [myTasks, setMyTasks] = useState(["Writing Notes", "Reading Book", "Attending an event", "editing"])
  const [completedTasks, setCompletedTasks] = useState([]);

  function handleInput(e) {
    let newValue = e.target.value;
    setNewTask(newValue);
  }

  function addTask() {
    setMyTasks(prev => [...prev, newTask])
    console.log(myTasks);
    setNewTask("")
  }

  function deleteTask(taskName, isCompleted) {
  if (isCompleted) {
    // Remove from completed tasks
    setCompletedTasks(prev => prev.filter(x => x !== taskName));
  } else {
    // Remove from to-do tasks
    setMyTasks(prev => prev.filter(x => x !== taskName));
  }
}


  function completeTask(taskName) {
    let completedTask = myTasks.filter(x => x == taskName)
    let afterFiltering = myTasks.filter(x => x != taskName)
    setMyTasks(afterFiltering)
    setCompletedTasks(prev => [...prev, completedTask[0]]);
    console.log("Completed Tasks: ", completedTasks)
  }

  return (
    <div className='main-body d-flex justify-content-center align-items-center'>
      <div className='todo-list-mainDiv'>
        <h1 className='text-center'>My To do List</h1>
        <div>
          <div className='todo-task-input-div'>
            <div className="form-floating w-75">
              <input type="text" className="form-control" id="floatingInput" placeholder="Todo task" onChange={(e) => {
                handleInput(e)
              }} value={newTask} />
              <label htmlFor="floatingInput">Enter Your Task</label>
            </div>
            <button className='btn btn-primary' id='add-button' onClick={() => { addTask() }}>+</button>
          </div>
          <h3 className='text-center'>Your Tasks</h3>
          <ul className='tasks-list'>
            {
              myTasks.map((task, index) =>
                <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask} isCompleted={false} />
              )
            }
          </ul>
          <hr />
          <hr />
          <br />
          <h3 className='text-center'>Completed Tasks</h3>
          <ul className='tasks-list'>
            {
              completedTasks.map((task, index) =>
                <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask} isCompleted={true}/>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
