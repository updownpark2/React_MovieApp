import { useState, useEffect } from "react";

function H3() {
  return (
    <div>
      <h3>Hello!!</h3>
    </div>
  );
}

function App2() {
  const [todo, setTodo] = useState("");
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const [todos, setTodos] = useState([]);
  console.log(todo);
  const onSubmit = (event) => {
    event.preventDefault();
    setTodos((recent) => [todo, ...recent]);
    //저장해주기 위해 배열을 생성하는것
    setTodo("");
  };
  console.log(todos);
  return (
    <div>
      <h1>Hello Sangha!</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="What To Do?"
          style={{
            padding: "10px 20px",
            color: "tomato",
            backgroundColor: "white",
            border: 0,
            borderRadius: 10,
          }}
        />
        <button style={{ border: 0, backgroundColor: "white" }}>Here!</button>
      </form>
    </div>
  );
}

export default App2;
