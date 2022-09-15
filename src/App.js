import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react";
import axios from 'axios';
import Login from './components/Login';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';


function App() {
  const [data,setData] =useState([])
  const [username,setUsername]=useState("")
  const [inputTask,setInputTask]=useState("")

  useEffect(()=>{
    const fetchData= async ()=>{
      const res =await axios.get("https://632235effd698dfa2908fb5d.mockapi.io/todos/todo")
      
      setData(res.data)
      console.log(res.data)
    }
    fetchData();


      },[])


  useEffect(()=>{
    setUsername(localStorage.getItem("user"))
  },[setUsername,username])    

  return (
    <div className="App">
    <Login username={username} setUsername={setUsername}/>
    <AddTask  inputTask={inputTask} setInputTask={setInputTask}/>
    <TodoList data={data}  setData={setData} inputTask={inputTask} setInputTask={setInputTask} />

    </div>
  );
}

export default App;
