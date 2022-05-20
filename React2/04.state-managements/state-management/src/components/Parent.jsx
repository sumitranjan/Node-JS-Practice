import React from "react";

const Parent = () => {
  const [value, setValue] = useState("");
  return (
      <div>
          <input onChange={(e)=>setValue}></input>
      </div>
  )
};

export default Parent;
