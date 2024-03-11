import { useState } from "react";
import Task from "../Task/Task";

const TaskList = () => {
  const [fieldValue, setFieldValue] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 

  const handleChange = (event) => {
    if (event.target.value !== "") {
      setFieldValue(event.target.value);
    }

  };

  const addTask = (value, index) => {
    if (fieldValue !== "") {
      setList([...list, fieldValue])
      setFieldValue("");
      setEditIndex(null); 
    }

  };



  // const deleteTask = (index) => {
  //   const updatedList = [...list];
  //   updatedList.splice(index, 1);
  //   setList(updatedList)
  // }

  const deleteTask = (count) => {
    const x = list.slice(0, count)
    const y = list.slice(count + 1,)
    const result = [...x, ...y]
    setList(result)
    setEditIndex(null); 

  }

  const editTask = (value, index) => {
    setFieldValue(value);
    setEditIndex(index);

  }
  const submitTask = (index) => {
    if (fieldValue !== ""  && editIndex !== null) {
      const updatedList = [...list]
      updatedList[index]=fieldValue
          setList(updatedList)
          setFieldValue("")
          setEditIndex(null);
    }
   
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={fieldValue} />

      <button onClick={addTask}>Add task</button>
      {/* <button onClick={()=>submitTask(index)}>Submit edit</button> */}
      <p>
        {list.map((value, index) => {
          return <Task task={value} key={index} index={index} delete={() => deleteTask(index)} edit={() => editTask(value, index)} submit={()=>submitTask(index)} isEditing={index==editIndex}/>
        })}
      </p>


    </>


  )
}

export default TaskList;

