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
      <h1>Memo🗒</h1>
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
              <button onClick={Click}>❌</button>
            </li> //click했을 때 아이템을 뺄 수 있어야한다. todos의 함수에서 setTodovalue를 이용해보자
          );
        })}
      </ul>
    </div>
  );
} //더생각해봐야겟다

export default App2;
