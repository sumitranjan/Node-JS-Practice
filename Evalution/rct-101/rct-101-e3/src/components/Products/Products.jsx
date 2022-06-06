import React, { useEffect, useState } from "react";
import axios from 'axios';
import Product from "./Product/Product";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios('http://localhost:8080/products')
    .then(res=>{
      setData(res.data)})
  },[])
  return (
    <div style={{display:"grid", gap:"50px", gridTemplateColumns:'repeat(3,1fr)', width:'80%',
               margin:'auto' }}>
      {/* Code here */}
      {
        data.map((el)=>{
          
          return (
            <Product key={el.id} data={el}/>
          )
        })
      }
    </div>
  );
};

export default Products;