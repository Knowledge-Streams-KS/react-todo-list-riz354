import { useEffect, useState } from "react";
import "./task.css"
const Task = (props) => {
    const [isCheck, setIsCheck] = useState(false);

    const handleCheck =()=>{
        setIsCheck(!isCheck)
    }

    // const deleteTask =()=>{
        
    //     props.delete(props.index)
    // }
    // useEffect(()=>{
    //     console.log("clicked")
    // },[])
    // useEffect(()=>{
    //     console.log("clicked")
    // })
    // useEffect(()=>{
    //     setInterval(() => {
    //     console.log("clicked")
            
    //     }, 100);
    // })
   
    return (
        <div className="taskflx">
            <input type="checkbox" onChange={handleCheck}/>
            <h1 style={{textDecoration:isCheck? "line-through":"none"}}> {props.task}:</h1>
            <button onClick={()=>(props.delete(props.index))}>Delete</button>
            <button onClick={()=>props.edit(props.task)}>Edit</button>
            {props.isEditing && <button onClick={()=>props.submit(props.index)}>submit</button>}

        </div>

    )
}

export default Task;