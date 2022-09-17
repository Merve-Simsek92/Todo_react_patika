import axios from 'axios';
import React, { useEffect } from 'react'

const AddTask = ({inputTask,setInputTask,data,setData,fetchData, setEditTask,editTask})  => {
useEffect(()=>{
  if(editTask){
    setInputTask(editTask.todo)
  }else{
    setInputTask("")
  }
},[setInputTask,editTask])
const handleClick = async (e)=>{
  e.preventDefault();
  if(!editTask){
    if(inputTask.length>=3){
    await axios.post("https://632235effd698dfa2908fb5d.mockapi.io/todos/todo",{
   todo:inputTask}).then((res) => setData((data)=> [...data,res])).catch((err)=>console.log(err))
   console.log(data)
  fetchData()
  setInputTask("")
}
else{
  data.map((item)=>{
    if(item.id === editTask.id){
       axios.put(`https://632235effd698dfa2908fb5d.mockapi.io/todos/todo/${editTask.id}`,
    {todo:inputTask}).then((res)=>setData((data)=>[...data,res]))
    }else{
      return item
    }
    fetchData()
    setEditTask("")
   
  })
}
fetchData()
  }
}


//   const handleClick= async (e)=>{
// e.preventDefault()
//  await axios.post("https://632235effd698dfa2908fb5d.mockapi.io/todos/todo",{
//    todo:inputTask}).then((res) => setData((data)=> [...data,res])).catch((err)=>console.log(err))
//    console.log(data)

// // setData((data)=> [...data,res])

//   //.then(res) => setData((data)=>[...data] , todo)
//   fetchData()
// }


    return (



    <div>
  <form>
<input
type="text"
placeholder="Enter a Todo ..."
className='addTask form-control d-inline'
onChange={(e)=>setInputTask(e.target.value)}
value={inputTask}

/>
<button  type='submit' className='task-btn btn bg-danger m-0.5' onClick={handleClick}> {editTask ? "OK" : "ADD"} </button>

  </form>




    </div>
  )
}

export default AddTask