import { click } from "@testing-library/user-event/dist/click";
import { useState, useEffect } from "react";

function Todolist() {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const Submit = (event) => {
    event.preventDefault();
    setArray((recent) => [value, ...recent]);
    setValue("");
  };
  const Click = (event) => {
    console.dir(event.target.parentElement);
  };
  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={Submit}>
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder="What to do?"
          style={{ padding: "10px 20px", borderRadius: 10 }}
        />
        <button
          style={{
            fontSize: "20px",
            border: 0,
            backgroundColor: "white",
          }}
        >
          🤡
        </button>
      </form>
      <ul>
        {array.map(function (item, index) {
          return (
            <li key={index}>
              {item}
              <button
                onClick={Click}
                style={{
                  fontSize: "20px",
                  border: 0,
                  backgroundColor: "white",
                }}
              >
                👺
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
