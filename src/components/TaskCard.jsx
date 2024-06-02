import {TaskContext} from '../api/Context.api.jsx';
import {useContext} from 'react';


function TaskCard({task}) {

  const contexto=useContext(TaskContext);
  const {deleteTask}=contexto;


  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={()=>{
        deleteTask(task.id);
      }} >
        Eliminar Tarea.
      </button>
    </div>
  );
}

export default TaskCard;
