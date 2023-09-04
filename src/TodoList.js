import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, addTodo } from "./slices/todo";
function TodoList() {
  const [input, setinput] = useState("");
  const todos = useSelector((state) => state.todoReducer.todolist);
  const dispatch = useDispatch();
  console.log(todos);
  function handleDelete(key) {
    dispatch(deleteTodo(key));
  }
  function handleAdd() {
    dispatch(addTodo(input));
    setinput("");
  }
  return (
    <div>
      <label>Enter Todo</label>
      <br />
      <input value={input} onChange={(e) => setinput(e.target.value)} />

      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <div style={{ display: "flex" }}>
            <li key={todo.id}>{todo.text}</li>
            <button onClick={() => handleDelete(todo.id)}>&times;</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
