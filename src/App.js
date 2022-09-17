import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react";
import axios from 'axios';
import Login from './components/Login';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import "./css/style.css"


function App() {
  const [data,setData] =useState([])
  const [editTask,setEditTask]=useState("")
  const [username,setUsername]=useState("")
  const [inputTask,setInputTask]=useState("")
 const fetchData= async ()=>{
      const res =await axios.get("https://632235effd698dfa2908fb5d.mockapi.io/todos/todo")
      
      setData(res.data)
      console.log(res.data)
    }
  useEffect(()=>{
   
    fetchData();},[])


  useEffect(()=>{
    setUsername(localStorage.getItem("user"))
  },[setUsername,username])    

  return (
    <div className="App">
      <Navbar username={username} setUsername={setUsername} />
    <Login username={username} setUsername={setUsername}/>
    <AddTask  inputTask={inputTask} setInputTask={setInputTask} data={data} setData={setData} fetchData={fetchData} editTask={editTask} setEditTask={setEditTask}  />
    <TodoList data={data}  setData={setData} inputTask={inputTask} setInputTask={setInputTask} fetchData={fetchData} editTask={editTask} setEditTask={setEditTask} />

    </div>
  );
}

export default App;
