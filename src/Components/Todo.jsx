//type rafc
import { useEffect, useRef, useState } from "react"
import './CSS/Todo.css'
import { TodoItems } from "./TodoItems";

let count = 0;
export const Todo = () => {

    const [todos,setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
        inputRef.current.value = "";
        localStorage.setItem("todos_count" , count); {/*for id count */}
    }
    useEffect(() => { {/*after page get reload we'll get the data from local-storage & store it in useState variable */}
        setTodos(JSON.parse(localStorage.getItem("todos"))); {/*to convert it into JSON */}
    count = localStorage.getItem("todos_count");{/*to count no. of todos */}
    },[]); {/*to be use on page reload */}

    useEffect(() => {//using useEffect when todo gets updated we log message below
         setTimeout(() => {
            console.log(todos);{/* local storage to store our todos and to convert it into string*/ }
         localStorage.setItem("todos",JSON.stringify(todos));
         }, 100);
    },[todos]); {/* to check local storage go to console -->application-->localstorage-->localhost:5173 */}
  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder="Add your task" className='todo-input' />
        <div onClick={() => {add()}} className="todo-add-btn">Add</div>
      </div>
    <div className="todo-list">
    {todos.map((item,index) => {
        return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
    })}
    </div>
        </div>
  )
}
