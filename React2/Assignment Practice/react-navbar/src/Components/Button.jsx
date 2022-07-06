import React from 'react';

const Button = () => {
    const btn={
        backgroundColor: "DodgerBlue",
        border: "null",
        margin: "12px",
        fontSize:"18px",
        borderRadius: "10px",
        width:"110px"
    }
  return (
    <div><button style={btn}>Contact</button></div>
  )
}

export default Button