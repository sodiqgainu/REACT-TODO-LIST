
import { useState } from 'react'


function App() {
  
const [todolist, setTodolist] = useState([])
const [task, setTask] = useState("")


const handleTask = () => {
  if(task){
   const newTask = {
    id: todolist.length ===0 ? 1 : todolist[todolist.length - 1].id + 1,
    todoTask: task,
    completed: false
   }

   setTodolist([...todolist, newTask])

   setTask('')
  }else{
    return 
  }

}

const handleDelete= (taskId)  => {
 setTodolist(todolist.filter(task => task.id !== taskId ))
}

const handleComplete= (taskId) =>{
  setTodolist(
  todolist.map((task) =>{

    if(task.id === taskId){
      return{
        ...task, completed: true
      };
    }
    else{
      return task
    }
  }
    
  ))
}


  return (
    <>
    <div className='inputContainer'>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
       <button onClick={handleTask}>Add task</button>
    </div>
      <div className='listItems'>
        {
        todolist.map((list) => {
          return(
            <>
            <div className='flex'     style={{ backgroundColor : list.completed ? "green" : "" }} >
            <h1 key={list.id}>{list.todoTask}</h1>
            <div className='btn'>
            <button onClick={() => handleDelete(list.id)}>🗑</button>
            <button onClick={() => handleComplete(list.id)}>✔</button>
            </div>
            </div>
            </>
          )
        })
        }
      </div>
    </>
  )
}


export default App
