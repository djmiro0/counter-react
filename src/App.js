import { useReducer, useState } from "react";
import "./App.css";
import AddMovies from "./components/AddMovies";
import UserContextProvider from "./components/context/UserContext";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "set-to-payload":
        return { count: action.payload };
      default:
        return state;
    }
    // if(action.type=== "increment"){
    //   return {count: state.count + 1};
    // }else if(action.type==="decrement"){
    //   return {count: state.count - 1};
    // }else if(action.type === "set-to-payload"){
    //   return {count: action.payload}
    // }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="App">
      Count: {count}
      <br />
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <hr />
      Count with useReducer: {state.count}
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button
        onClick={() => dispatch({ type: "set-to-payload", payload: 101 })}
      >
        set to payload
      </button>
      {/*useContext step 3: wrap your components with the global store (the function from UserContext)}:*/}
      <UserContextProvider>
        <User />
        <AddMovies />
      </UserContextProvider>
    </div>
  );
}

export default App;
