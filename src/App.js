import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div className="App">
      Count: {count}
      <br />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      Count with useReducer: {state}
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default App;
