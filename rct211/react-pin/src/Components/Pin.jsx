import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import PinItem from "./PinItem";

export const Pin = ({ length, setOtpHandler }) => {
  const inputRef = useRef([]);
  const [inputBoxLen] = useState(new Array(length).fill(1));
  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(length).fill("") //["","","",""]
  );

  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    // console.log(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };

  const handleBackspace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };

  const handlePaste = (e) => {
     
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    data.forEach((value, index) => {
      inputBoxValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };
  return (
    <div
      onPaste={handlePaste}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {inputBoxLen.map((_, index) => {
        return (
          <PinItem
            key={index}
            changeHandler={(e) => handleChange(e, index)}
            //ref={inputRef}   //get only the reference of last index
            onBackSpaceHandler={(e) => handleBackspace(e, index)}
            ref={(element) => {
              inputRef.current[index] = element;
            }}
          />
        );
      })}
    </div>
  );
};

//PropTypes -> way to limit the types of props that you get in a react component

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  onchange: PropTypes.func,
};

//create input boxes based on the length;
//create the focus behaviour

//Event bubbling /  Event Propagation
