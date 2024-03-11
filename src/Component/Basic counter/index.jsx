// import { useState } from "react"

// const BasicCounter = () =>{

//     const [handleChang  , sethandleChange] = useState(0);
//     const [count , setCount] = useState(10);



//     const handleChange  =(event)=>{
//         const num = Number(event.target.value)
//         sethandleChange(num)
//     }
//     const handleIncremment =()=>{
//        console.log(count)
//         // setCount(count + handleChang);
//         setCount((count)=>{
//             count + handleChang
//         })
//         setCount((prevStat)=>{
//             prevStat + handleChang
//         })
//         // setCount(count + handleChang);
//        console.log(count)


//         sethandleChange("")
       
//     }
//     return (
//         <>
//         <h1>Count Is : {count}</h1>
//         <input type="number" onChange={handleChange} value={handleChang} />
//         <button onClick={handleIncremment}>Increment</button>
//         </>
//     )
// }

// export default BasicCounter
import { useState } from "react";

const BasicCounter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [count, setCount] = useState(10);

  const handleChange = (event) => {
    const num = Number(event.target.value);
    setInputValue(num);
  };

  
  const handleIncrement = () => {
    console.log(count)
    setCount((prevCount) => prevCount + Number(inputValue));
    setCount((prevCount) => prevCount + Number(inputValue));
    console.log(count)


    setInputValue("");
  };
  

  return (
    <>
      <h1>Count Is: {count}</h1>
      <input type="number" onChange={handleChange} value={inputValue} />
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default BasicCounter;
