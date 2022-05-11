import { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("Mounted Todos");
    getData();

    //Curried function
    //unmounting
    return () => {
      //Closure
      //called after component is unmounted
      console.log("Unmounted Todos done");
    };
    // //Same as above arow function
    // //Curried function
    //  return function cleanup() {
    //   //Closure
    //   //called after component is unmounted
    //   console.log("Unmounted Todos done");
    // };
  }, [page]);

  //Pagination(Updating)
  const getData = async () => {
    const data = await fetch(
      `http://localhost:8080/todos?_page=${page}&_limit=3`
    ).then((d) => d.json());
    setTodos(data);
    setLoading(false);
  };
  return loading ? (
    "Loading....."
  ) : (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter todo"
      />
      <button
        onClick={() => {
          const payload = {
            title: text,
            status: false,
          };

          fetch("http://localhost:8080/todos", {
            method: "Post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then(() => {
            getData();
          });
          //axios.post("http://localhost:8080/todos",payload)
          //same as above fetch request
        }}
      >
        Add todo
      </button>
      {todos.map((t) => (
        <div key={t.id}>
          {t.id}.{t.title}
        </div>
      ))}

      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

//explanation
// function useeffect2(callbackfun, deps){
//   const ret = callbackfun();

//   if(unmounted){
//     ret();
//   }
// }

// useeffect2(function mount () {
//   return function unmount() {};
// });
