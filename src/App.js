import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if(newTodo===""){
      alert("task should not be empty")
    }
    else if(newTodo!=='') {
      setTodos([...todos, newTodo]);
    
      setNewTodo('');
    }
  };
  // console.log(todos);

  const deleting = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editing = (index, newTodoText) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newTodoText;
    setTodos(updatedTodos);
  };
  // console.log(todos);

  return (
    <div className='card' style={{marginTop: '100px',marginLeft: '500px', marginRight:"500px",backgroundColor: "cyan",padding:"70px"}}>
      
      
      <input
      style={{padding:"10px",borderRadius:"20px",margin:"20px"}}
        type="text"
        value={newTodo}
        placeholder="Enter a new todo"
        onChange={(e) => setNewTodo(e.target.value)}
       />

<button style={{padding:"10px",borderRadius:"10px",backgroundColor:"lightgreen"}}onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
                   {todo}
  <button  style={{backgroundColor:"darkviolet",margin:"10px"}}onClick={() => deleting(index)}>Delete</button>
  <button style={{backgroundColor:"snow"}} onClick={() => editing(index, prompt('Enter new todo text:'))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
