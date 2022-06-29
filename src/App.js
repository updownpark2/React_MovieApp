import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

//useEffect(딱 한번만 실행하고싶은코드,[이 변수가 변할때])
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
    setTodos((currentArray) => [...currentArray, todo]);
    setTodo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My to Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="To-do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map(function (item, index) {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
