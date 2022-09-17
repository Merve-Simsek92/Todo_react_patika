import React from 'react'

const Navbar = ({username,setUsername}) => {

const handleClick=()=>{
  localStorage.removeItem("user")
  setUsername()
}

  return (
    <div className="navbar navbar-light bg-info d-flex justify-content-space-between p-3">

    <a className="navbar-brand" href="#">
    To Do App
    </a>
    <div> <a className="navbar-brand">Welcome {username.toUpperCase()}</a>
    <button className="login-btn" onClick={()=>handleClick()}>Logout</button></div>
   
  </div>
  )
}

export default Navbar