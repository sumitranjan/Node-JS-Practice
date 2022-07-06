import React from "react";

const Links = () => {
  const item = ["Services", "Projects", "About"];
  const design = {
    margin: "14px 10px",
   
  };
  return (
    <div style={{ display: "flex" }}>
      {item.map((e) => (
        <p style={design}>{e}</p>
      ))}
    </div>
  );
};

export default Links;
