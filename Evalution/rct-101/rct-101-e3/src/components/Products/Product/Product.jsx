import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";

const Product = (props) => {
  // Note: this id should come from api
  const product = props.data;

    const [data, setData] = useState({});
    useEffect(()=>{
      axios(`http://localhost:8080/cartItems/${product.id}`)
      .then(res=>{
        setData(res.data)
      })
      .catch(err=>{

      })
    },[])
    // console.log(data.productId)
  return (
    <div data-cy={`product-${product.id}`} style={{border:'1px solid black', width:"300px",margin:'auto', borderRadius:"5px"}}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">{data.count? "Add to Cart":"Add to Cart"}</button>
      {data.count && 
      <div>
        <button data-cy="product-increment-cart-item-count-button" 
               >+</button>
        <span data-cy="product-count">
          {
            data.count
            // Count here from CartItems
            // product.count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"
                >-</button>
        <button data-cy="product-remove-cart-item-button">Remove from Cart</button>
      </div>}
    </div>
  );
};

export default Product;