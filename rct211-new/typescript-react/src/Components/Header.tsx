import React from 'react';

interface HeaderProps{
    label?: string;
    children?: JSX.Element | JSX.Element[];
}

//label 
const Header = ({label='Default Props', children}:HeaderProps) => {
  return (
    <>
        <h1>{label }</h1>
        {children}
    </>
  )
}

export default Header