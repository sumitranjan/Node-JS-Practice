import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart'

const Product = () => {
  const {isAuthorized} = useContext(AuthContext);
  return (
    <div>Product : 
      {isAuthorized ? " Logged In" : " Logged Out"} 
        <Cart/>
    </div>
  )
}

export default Product