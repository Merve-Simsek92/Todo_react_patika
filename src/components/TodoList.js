import React from 'react'
import { FaTimes , AiFillEdit} from "react-icons/fa";
import { FaMarker } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TodoList = ({data,setData,inputTask,setInputTask}) => {
  return (
    <div>
    {data.map((item,id)=>(
      <div key={id}>
       
      <h3>
        {item.todo}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
         
        />
        <FaMarker/>
        
      </h3>
      
      
  
      

      </div>
    ))}

    </div>
  )
}

export default TodoList