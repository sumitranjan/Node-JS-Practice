import React, { useState } from "react";
import { useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      if (timer < 1) {
        clearInterval(id);
      } else {
        //stale state
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    //component is unmounting 
    return () => {
      //call a api to inform that user has logged out
      clearInterval(id);
    };
  }, [timer]);

  return <div>Count Down : {timer}</div>;
};

export default Timer;
