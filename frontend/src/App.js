import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addTODO, getAllTODO , updateTODO,deleteTODO} from "./utils/HandleApi";

function App() {

const [todo,setTODO] = useState([])
const [text,setText] = useState("")
const[isUpdating,setIsUpdating] = useState(false)
const [toDoId,setToDoId] = useState("")

useEffect(() => {
  getAllTODO(setTODO)
},[] )

const updateMode = (_id,text) => {
  setIsUpdating(true)
  setText(text)
  setToDoId(_id)
}

  return (
    <div className="App">
      <div className="container">
        <h1>TODO APP</h1>
        <div className="top">
          <input 
          type = "text" 
          placeholder = "Add ToDos..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
           <div 
           className="add"
           onClick = {isUpdating ?

             () =>updateTODO(toDoId,text,setTODO,setText,setIsUpdating)
           
           : () => addTODO(text,setText,setTODO)}>
            { isUpdating ? "update" : "Add"}
            </div> 
        </div>
        < div className="lists">
        {todo?.map((item) => <ToDo
         key = {item._id} 
         text = {item.text}
         updateMode ={() => updateMode(item._id,item.text)}
         deleteTODO = {() => deleteTODO(item._id,setTODO)} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
