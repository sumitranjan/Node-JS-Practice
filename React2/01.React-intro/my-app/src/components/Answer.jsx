import React from "react";

// const Answer1 = () => {
//     return (
//         <div>Hello from Answer 1</div>
//     )
// }

// const Answer2 = () => {
//     return (
//         <div>Hello from Answer 2</div>
//     )
// }

// const Answer3 = () => {
//     return (
//         <div>Hello from Answer 2</div>
//     )
// }

// export {Answer1,Answer2,Answer3}

//JS inside JSX
const Answer = ({ name, place, infox ={a:6, b:5}}) => {
  return (
    <div>
      Hello I'm {name} and I'm from {place} ({infox.a} || {infox.b})
      
    </div>
  );
};

export { Answer };
