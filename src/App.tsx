import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {ITask} from './Interfaces';

import {TodoItem} from './components/TodoItem'
import './App.css';

const App : FC  = () =>{
  const data = localStorage.getItem('todoArray')
  const [task, setTask] = useState<string>("")
  const [remark, setRemark] = useState<string>("")
  const [todoList, setTodoList] = useState<ITask[]>(data === null ? [] : JSON.parse(data))

  const onInputChange = (event: ChangeEvent<HTMLInputElement>)=>{
    if(event.target.name === 'task'){
      setTask(event.target.value)
    }else{
      setRemark(event.target.value)
    }
  }

  useEffect(()=>{
    localStorage.setItem("todoArray", JSON.stringify(todoList))
    console.log("hi")
  }, [todoList])

const addTask = (): void =>{
  if(task !== "" && remark !== ""){
    const newTodo = {
      taskName: task,
      remark: remark.toLocaleLowerCase(),
      id: uuidv4()
    }
    setTodoList([...todoList, newTodo])
    setTask("")
    setRemark("")
  }else{
    alert("Enter Valid Details")
  }

}

const deleteTask = (id: string)=>{
    setTodoList(todoList.filter(each=>each.id !== id))
}

  return (
    <div className="App">
      <h1 className='heading'>Add Tasks to Track</h1>
      <div className='top-section'>
        <div className='input-container'>
          <input type="text" placeholder='Add Task' onChange={onInputChange} name="task" value={task} className="input"/>
          <input type="text" placeholder='Add a Remark' name="deadLine" value={remark} onChange={onInputChange} className="input"/>
        </div>
        <button onClick={addTask} className="add-btn">Add Task</button>
      </div>
      <div className='bottom-section'>
      {todoList.map((each: ITask)=>{
        return <TodoItem key={each.id} task={each} deleteTask={deleteTask}/>
      })}
      </div>
    </div>
  );
}

export default App;
