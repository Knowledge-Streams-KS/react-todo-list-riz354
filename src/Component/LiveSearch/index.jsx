import { useState } from "react";

const LiveSearch = () => {
    const data = [
        "Apple", //apple
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeydew",
        "Kiwi",
        "Lemon",
    ]
    const [searchTerm, setSearchTerm] = useState("")
    const [fruits, setFruits] = useState(data)


    const handleSearch = (event) => {
        setSearchTerm(event.target.value);

        const filterData = data.filter((frt) => {
            return frt.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFruits(filterData);
    }

    return (

        <>
            <h1>Search Fruits</h1>
            <input type="text" onChange={handleSearch} />
            <ul>
                {fruits.map((ele, index) => {
                    return <li key={index}>{ele}</li>
                })}
            </ul>
        </>
    )
}

export default LiveSearch;