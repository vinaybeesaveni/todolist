import {MdDelete} from 'react-icons/md'
import {ITask} from '../Interfaces'
import './TodoItem.css'

interface Props{
    task: ITask,
    deleteTask(id: string): void
}

export const TodoItem = ({task, deleteTask}: Props)=>{
return (
    <div className='task-container'>
    <div className='details-container'>
    <h2 className='task-name'>{task.taskName}</h2>
    <p className='remark'>{task.remark}</p>    
    </div> 
    <button onClick={()=>deleteTask(task.id)} className="delete-btn" title='delete'><MdDelete /></button>       
    </div>
    
    

)
}