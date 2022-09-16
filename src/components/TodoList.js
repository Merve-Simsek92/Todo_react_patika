import axios from "axios";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaMarker } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const TodoList = ({
  data,
  setData,
  inputTask,
  setInputTask,
  fetchData,
  editTask,
  setEditTask,
}) => {
  const handleDelete = async ({ id }) => {
    await axios
      .delete(`https://632235effd698dfa2908fb5d.mockapi.io/todos/todo/${id}`)
      .then(setData(data.filter((item) => item.id !== id)))
      .catch((err) => console.log(err));
    fetchData();
    console.log(data);
  };
  const handleEdit = async ({ id }) => {
    const editTodo = data.find((item) => item.id === id);
    setEditTask(editTodo);
    setInputTask(editTodo.todo)
    fetchData()
  };

  return (
    <div>
      {data.map((item, id) => (
        <div key={id}>
          <h3>
           <input 
           onChange={(e)=>e.preventDefault()}
           value={item.todo}/>
           <div><button onClick={() => handleDelete(item)}>
              <FaTrashAlt style={{ color: "red", cursor: "pointer" }} />
            </button>
            <button onClick={() => handleEdit(item)}>
              <FaRegEdit />
            </button></div>
            
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
