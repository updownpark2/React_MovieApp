import { click } from "@testing-library/user-event/dist/click";
import { useState, useEffect } from "react";

function App2() {
  const [todovalue, setTodovalue] = useState("");
  const change = (event) => {
    setTodovalue(event.target.value);
  };
  const [todos, setTodos] = useState([]);
  const Submit = (event) => {
    event.preventDefault();
    setTodos((recent) => [todovalue, ...recent]);
    setTodovalue("");
  };
  const Click = (event) => {
    console.dir(event.target.parentElement);
  };
  return (
    <div>
      <h1>Memo๐</h1>
      <form onSubmit={Submit}>
        <input
          onChange={change}
          value={todovalue}
          type="text"
          placeholder="What To Do?"
        />
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {todos.map(function (item, index) {
          return (
            <li key={index}>
              {item}
              <button onClick={Click}>โ</button>
            </li> //clickํ์ ๋ ์์ดํ์ ๋บ ์ ์์ด์ผํ๋ค. todos์ ํจ์์์ setTodovalue๋ฅผ ์ด์ฉํด๋ณด์
          );
        })}
      </ul>
    </div>
  );
} //๋์๊ฐํด๋ด์ผ๊ฒ๋ค

export default App2;
