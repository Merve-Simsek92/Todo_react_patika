import React,{useState} from 'react'

const Login = ({username,setUsername}) => {

 const handleLogin=()=>{
    localStorage.setItem("user",inputname)
    setUsername(inputname)
 }   
const [inputname,setInputname]=useState("")
  return (
    <div>
     <input type="text" className="form-control"  placeholder="username" onChange={(e)=>setInputname(e.target.value)}   />
     <button type="submit" className='btn bg-warning m-2 mb-5'  onClick={()=>handleLogin()}>OK</button>
    
    </div>
  )
}

export default Login