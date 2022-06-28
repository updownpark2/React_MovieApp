import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

//useEffent(딱 한번만 실행하고싶은코드,)
function App() {
  const [todo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
    console.log(toDos);
  };
  console.log(todo);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="To-do"
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
