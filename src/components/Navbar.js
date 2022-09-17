import React from 'react'

const Navbar = ({username,setUsername}) => {
  return (
    <div className="navbar navbar-light bg-info d-flex justify-content-between p-3">

    <a className="navbar-brand" href="#">
    To Do App
    </a>
    <a className="navbar-brand">{username}</a>
  </div>
  )
}

export default Navbar