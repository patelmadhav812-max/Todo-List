// import { useStyleSheetContext } from 'styled-components/dist/models/StyleSheetManager'
import './Todo.css'
import {  useState } from 'react'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDT } from './TodoDT';
import {  getLocalStorageTodoData,setLocalStorageTodoData } from './TodoLocalst';
// import {
//     getlocalstorage,
//     setlocalstorag,
// }from "./TodoLocalst";
const TodoKey = "reattodo";

export const Todo = () => {

const [task, settask] = useState(()=>getLocalStorageTodoData());
    
 
// handle form
    const handleFormSubmit = (inputval) => {
        const {id, content,checked}=inputval;
        if (!content) return;
      const ifTodoContentMatched = task.find((curTask)=>curTask.content === content)
      if(ifTodoContentMatched)return;
        settask((pre) => [...pre, {id,content,checked}]);
    }
    // for add todo into localStorage
    setLocalStorageTodoData(task);
    // localStorage.setItem(TodoKey,JSON.stringify(task));

// for checked
const handlecheckedtodo=(content)=>{
    const updateTask = task.map((curTask)=>{
        if(curTask.content === content){            
            return{ ...curTask, checked: !curTask.checked};
    }else{
            return curTask;
        }
    });
    settask(updateTask);
}
   
//Deleting todo 
const handledeletetodo=(value)=>{

    const update = task.filter((curTask)=>curTask.content !== value)
    settask(update);
}

// clear all
const handleCleartodo =()=>{
    settask([]);
}



    return (
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
                <TodoDT/>
            </header>
             <TodoForm onAaddTodo={handleFormSubmit}/>
             <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                               <TodoList key={curTask.id} 
                               data={curTask.content}
                               checked={curTask.checked}
                               onHandleDeleteTodo={handledeletetodo}
                               onHandleCheckedTodo={handlecheckedtodo}
                             />
                            )
                        })
                    }
                </ul>
            </section>
            <section>
                <button className='clear-btn' 
                onClick={()=>handleCleartodo()}>Clear all</button>
            </section>
        </section>
    )
}
