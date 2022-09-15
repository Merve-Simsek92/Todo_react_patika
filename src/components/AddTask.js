import React from 'react'

const AddTask = ({inputTask,setInputTask}) => {
  return (
    <div>
  <form>
<input
type="text"
placeholder="Enter a Todo ..."
className='addTask'
onChange={(e)=>setInputTask(e.target.value)}


/>
<button type="submit" className='task-btn'> ADD </button>

  </form>




    </div>
  )
}

export default AddTask