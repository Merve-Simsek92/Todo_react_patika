import React,{useState} from 'react'

const Login = ({username,setUsername}) => {

 const handleLogin=()=>{
    localStorage.setItem("user",inputname)
    setUsername(inputname)
 }   
const [inputname,setInputname]=useState("")
  return (
    <div>
     <input type="text" className="input-name" placeholder="username" onChange={(e)=>setInputname(e.target.value)}   />
     <button type="submit" className='btn'  onClick={()=>handleLogin()}>Login</button>
    
    </div>
  )
}

export default Login