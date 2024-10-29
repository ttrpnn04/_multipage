import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "./layouts/Layout/Layout";

import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
import Component from "./pages/component/component";
import Todo from "./pages/Todo/Todo";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";

import { fetchProducts } from "./data/products";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import "./App.css";

// HashRouter, BrowserRouter, MemoryRouter
// localhost:5173/#/<path>     // HashRouter *Compatible old*
// localhost:5173/<path>       // BrowserRouter *Production*
// localhost:5173              // MemoryRouter

//App -> Layout -> Navbar (buttons)
//tab -> (props)

function App() {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  useEffect(() => console.log(products), [products]);

if (token === '') {
  return (<Login setToken={setToken} setRole={setRole} />);
} else { 


  return (
    <div className="app-container">
      <HashRouter>
        <Routes>
          <Route element={<Layout products={products} cart={cart} setToken={setToken} />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/calculator"} element={<Calculator />} />
            <Route path={"/component"} element={<Component />} />
            <Route path={"/todo"} element={<Todo />} />
            <Route
              path={"/product"}
              element={
                <Product products={products} cart={cart} setCart={setCart} />
              }
            />
            <Route path={"/cart"} element={<Cart cart={cart} setCart={setCart} />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
}

export default App;
