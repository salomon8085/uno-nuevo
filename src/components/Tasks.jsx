import {TaskContext } from '../api/Context.api';
import { useContext } from "react";

import TaskCard from './TaskCard';

function Tasks() {

    const contexto=useContext(TaskContext);
    const {tasks}=contexto;

  return (
    tasks.map((task,id)=>{
        return(
            <TaskCard task={task} key={id}/>
        );
    })
  );
}

export default Tasks;
