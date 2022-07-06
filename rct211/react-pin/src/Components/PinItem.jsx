import React, { forwardRef } from "react";

const PinItem = forwardRef(({ changeHandler, onBackSpaceHandler }, ref) => {
  //   console.log(ref);
  const handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      onBackSpaceHandler(e);
    } else {
      changeHandler(e); 
    }

    //if Backspace is click , perform some action
    //else
    //call the changeHandler
  };
  return (
    <div>
      <input ref={ref} maxLength={1} onKeyUp={handleKeyUp} />
    </div>
  );
});

export default PinItem;
