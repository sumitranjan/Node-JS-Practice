import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const WishList = () => {
    const {count} = useContext(CartContext)
  return (
    <div>WishList: {count}</div>
  )
}

export default WishList