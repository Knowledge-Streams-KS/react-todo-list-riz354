import Counter from "./Component/Counter"
import TaskList from "./Component/TaskList/TaskList"
import BasicCounter from "./Component/Basic counter"
import LiveSearch from "./Component/LiveSearch"
const App = () => {

  const itemsDetail = [
    {
      name: "Shirt",
      rating: "4"
    },
    {
      name: "Jeans",
      rating: "3"
    },
    {
      name: "Shoes",
      rating: "4"
    },

  ]
  return (
    <div>

      {/* {itemsDetail.map((element,index)=>{
        return <Counter name={element.name} Rating={element}/>
      })}
      */}
      <TaskList />

      {/* BASIC COUNTER */}
      {/* <BasicCounter /> */}

      {/* <LiveSearch /> */}

    </div>
  )
}
export default App;