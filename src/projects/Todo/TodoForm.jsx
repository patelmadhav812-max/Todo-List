import {  useState } from 'react'
export const TodoForm =({onAaddTodo})=>{
    const [inputval, setInputval] = useState({})

    
    const handleinputchange = (value) => {
        setInputval({id:value , content:value , checked:false});
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        onAaddTodo(inputval);
        setInputval({id:"",content:"",checked:"false"});
    }
    
return(
  <section className='form' onSubmit={handleSubmit}>
    <form>
      <div>
        <input type="text" className='todo-input' autoComplete='off' value={inputval.content}
            onChange={(event) => handleinputchange(event.target.value)} />
      </div>
    <div>
        <button type='submit' className='todo-btn'>Add Task</button>
    </div>
</form>
</section>
    )
}
