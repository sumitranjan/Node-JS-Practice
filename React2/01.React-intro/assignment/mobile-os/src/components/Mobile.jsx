import React from "react";

const Mobile = ({ props }) => {
  // return (
  //   <div>
  //     <h1>{heading}</h1>
  //     <div>
  //       {item.map((e) => (
  //         <li>{e}</li>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <h1>{props.heading}</h1>
      <div>
        {props.item.map((e) => (
          <li>{e}</li>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
