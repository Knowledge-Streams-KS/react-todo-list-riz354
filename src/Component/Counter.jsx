import { useState } from "react"
import "./task.css"

const Counter = (props) => {

    const [value, setValue] = useState(0);
    const [inputNum,setInputNum] = useState(0)
    const Increment = () => {
        setValue(value + inputNum)
    }
    const Decrement = () => {
        if (value > 0) {
            setValue(value - inputNum)

        }
    }

    const handleInputChange =(event)=>{
        const num = Number(event.target.value)
        setInputNum(num)
    }

    return (
        <div className="items">
            <h1>Item Name :{props.name} </h1>
            <h2>Rating : {props.Rating.rating}</h2>
            <h3 className={value>0?"itemPriceClrNZ":"itemPriceClrZ"}> Price of item:{value > 0 ? value : "No item in cart"} </h3>
            <input type="number" name="" id="" onChange={handleInputChange} />
            <br />
            <br />
            <button onClick={Increment}>increment</button>
            <br />
            <br />
            {/* {value>0 ?  <button onClick={Decrement} >decrement</button>:<></>} */}

            {/* short circuiting */}
            {value > 0 && <button onClick={Decrement} >decrement 1</button>}

        </div>
    )
}

export default Counter;