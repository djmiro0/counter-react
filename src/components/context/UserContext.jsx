import React, { createContext, useReducer } from "react";
//useContext step 1: create the global store:
export const UserContext = createContext();

//useContext step 2 create the context provider function:
export default function UserContextProvider({ children }) {
  const initialState = {
    username: "",
    email: "",
    favMovies: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add-name":
        return { ...state, username: action.payload };
      case "add-email":
        return { ...state, email: action.payload };
      case "add-movie": {
        if (state.favMovies.some((x) => x.title === action.payload.title)) {
          return state;
        } else
          return { ...state, favMovies: [...state.favMovies, action.payload] };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
