import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {};
    fetch("http://localhost:8080/products")
      .then((r) => r.json())
      .then((d) => {
        setProducts(d);
      });
    fetchProducts();
  }, []);
  return (
    <div>
      Products :{" "}
      <div>
        {products.map((p) => (
          <div key={p.id}>
            <Link to={`/product/${p.id}`}>{p.name}</Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
