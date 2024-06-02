import {createContext} from 'react';
import { useState, useEffect} from 'react';
import {taskList} from '../data/TaskList.js';

export const TaskContext = createContext();

export function TaskContextProvider({children}) {


    const [tasks, setTasks] =useState([]);
    
    useEffect(()=>{
        setTasks(taskList);
    },[]);
  
    const createTask=(task)=>{
      setTasks([...tasks,{...task,id:tasks.length}]);
    };
  
    const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=>{
        if(task.id !== id){
          return task;
        }
      }));
    };

  return (
    <TaskContext.Provider value={{tasks,createTask,deleteTask}}>
      {children}
    </TaskContext.Provider>
  )
}



