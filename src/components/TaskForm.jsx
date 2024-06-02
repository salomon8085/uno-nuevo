import {useState, useContext} from 'react';
import {TaskContext} from '../api/Context.api'

function TaskForm() {

  const contexto= useContext(TaskContext);
  const {createTask}=contexto;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const sumbitFuction=(e)=>{
    e.preventDefault();
    console.log(title);
    createTask({title,description});
    setTitle('');
    setDescription('');
  };

  return (
        <form action="" onSubmit={(event)=>{sumbitFuction(event)}}>
            <input type="text" value={title} placeholder="Escribe tu tarea" onChange={(event)=>{                
                setTitle(event.target.value);
            }} />
            <textarea name="" id="" value={description} placeholder='Write the task description' onChange={(event)=>{
              setDescription(event.target.value);
            }}></textarea>
            <button type="submit">
                Guardar.
            </button>
        </form>
  )
}

export default TaskForm;
