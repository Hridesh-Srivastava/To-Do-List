//use rafc
import './CSS/TodoItems.css'
import tick from "./Assets/tick.png"
import not_tick from "./Assets/not_tick.png"
import cross from "./Assets/cross.png"

export const TodoItems = ({no,display,text,setTodos}) => {
    const delete1 = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no !== no)
        setTodos(data);
    }
    //logic when click to change the display property--> icon to tick icon
    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos")); //to get data in string
        for(let i = 0 ;i<data.length;i++){
            if(data[i].no===no){
                if(data[i].display===""){
                    data[i].display = "line-through";
                }
                else{
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }
  return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={() => {toggle(no)}}>
          {display===""?<img src={not_tick} alt='' />:<img src={tick} alt='' />}  
            
            <div className='todoitems-text'>{text}</div>
        </div>
        <img className='todoitems-cross-icon' onClick={() => {delete1(no)}} src={cross} alt='' />
    </div>
  )
}
