import { useState } from "react";

export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");
//   console.log("Input:", text);
  return (
    <div>
      <input
        onChange={(e) => {
          //    console.log(e.target.value);
          setText(e.target.value); // re-render and set value in "text"
        }}
        type="text"
        placeholder="Enter Todo"
      />
      <button
        onClick={()=>{
            getData(text);
        }}
      >Add todo</button>
      {/* {text} */}
    </div>
  );
};
