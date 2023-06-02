import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function deleteTodo(index) {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function ToDoList({ todos }) {
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Button
              variant="danger"
              onClick={() => deleteTodo(index)}
              className="ms-3"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="m-3">
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <Button variant="primary" onClick={addTodo} className="ms-3">
        Add
      </Button>
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
