import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function AddMovies() {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div>
      Add a Movie:
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "add-movie",
            payload: {
              title: e.target.title.value,
              duration: e.target.duration.value,
              rating: e.target.rating.value,
            },
          });
        }}
      >
        <h3>Title:</h3>
        <input type={"text"} name="title" />
        <h3>Duration:</h3>
        <input type={"text"} name="duration" />
        <h3>IMDB Rating:</h3>
        <input type={"text"} name="rating" />
        <button>add</button>
      </form>
    </div>
  );
}
