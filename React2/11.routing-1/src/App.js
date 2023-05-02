import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} /> */}

        {/* Nesting Route */}
        <Route path="products/*" element={<Products />}>
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
