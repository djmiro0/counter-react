import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function User() {
  //useContext step 4: extracting the needed data from the global state:
  const { dispatch, state } = useContext(UserContext);

  console.log(state);

  return (
    <div>
      <h3> username: </h3>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "add-name", payload: e.target.value })
        }
      />

      <h3> email: </h3>
      <input
        type={"email"}
        onChange={(e) =>
          dispatch({ type: "add-email", payload: e.target.value })
        }
      />
    </div>
  );
}
