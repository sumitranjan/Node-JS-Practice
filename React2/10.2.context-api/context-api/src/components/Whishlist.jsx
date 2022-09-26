import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext';

const Whishlist = () => {
    const {count} = useContext(cartContext);
  return (
    <div>Whishlist :{count}</div>
  )
}

export default Whishlist