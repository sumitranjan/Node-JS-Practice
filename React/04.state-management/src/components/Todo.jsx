import { useState } from "react";

import { TodoInput } from "./TodoInput";

function Todo() {
  const [todosList, setTodosList] = useState([]);

  const getData = (todo) => {
    console.log("Received ", todo);
    setTodosList([...todosList,todo]);//create new array with previous element and new element
  };
  return (
    <div>
      <TodoInput getData={getData} />
      {/* Todos List:  */}
      {todosList.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}

export { Todo };
