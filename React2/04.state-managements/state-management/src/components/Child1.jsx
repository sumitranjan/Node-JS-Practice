import React, { useState } from "react";

const Child1 = () => {
  const [childValue, setChildValue] = useState("");
  return (
      <div>
          <input onChange={(e)=>setChildValue(e.target.value)}>
      </div>
  )
};

export default Child1;
