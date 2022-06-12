import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      if (timer > 100) {
        clearInterval(id);
      } else {
        setTimer(timer + 1);
      }
    }, 10000);

    return () => {
      //call a api to inform that user as logged out
      clearInterval(id);
    };
    //component is unmounting
  }, []);
  return <div>Count Up : {timer}</div>;
};

export default Timer;
