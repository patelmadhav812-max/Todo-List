const TodoKey = "reacttodo";

export const getLocalStorageTodoData=()=>{
    const rawTodos= localStorage.getItem(TodoKey);
    
    if(!rawTodos) return  []
    return JSON.parse(rawTodos);
}

export const setLocalStorageTodoData=(task)=>{
    return localStorage.setItem(TodoKey,JSON.stringify(task));
}