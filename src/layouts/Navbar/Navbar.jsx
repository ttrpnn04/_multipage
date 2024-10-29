import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";

const initPage = "home";

function Navbar({ products, cart, setToken }) {
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initPage);
  }, []);

  const homeRef = useRef();
  const calculatorRef = useRef();
  const componentRef = useRef();
  const todoRef = useRef();
  const productRef = useRef();
  const cartRef = useRef();

  useEffect(() => {
    if (tab === "calculator") calculatorRef.current.click();
    else if (tab === "component") componentRef.current.click();
    else if (tab === "todo") todoRef.current.click();
    else if (tab === "product") productRef.current.click();
    else if (tab === "cart") cartRef.current.click();
    else homeRef.current.click();
  }, [tab]);

  return (
    <div className="navbar-container">
      <Link to={"/home"}>
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            "btn " + (tab === "home" ? "btn-primary" : ") btn-outline-primary")
          }
          onClick={() => setTab("home")}
          ref={homeRef}
        >
          Home
        </button>
      </Link>

      <Link to={"/calculator"}>
        {" "}
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            "btn " +
            (tab === "calculator" ? "btn-primary" : ") btn-outline-primary")
          }
          onClick={() => setTab("calculator")}
          ref={calculatorRef}
        >
          Calculator
        </button>
      </Link>

      <Link to={"/component"}>
        {" "}
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            "btn " +
            (tab === "component" ? "btn-primary" : ") btn-outline-primary")
          }
          onClick={() => setTab("component")}
          ref={componentRef}
        >
          Component
        </button>
      </Link>

      <Link to={"/todo"}>
        {" "}
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            "btn " + (tab === "todo" ? "btn-primary" : ") btn-outline-primary")
          }
          onClick={() => setTab("todo")}
          ref={todoRef}
        >
          Todo
        </button>
      </Link>

      <Link to={"/product"}>
        {" "}
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={
            "btn " +
            (tab === "product" ? "btn-primary" : ") btn-outline-primary")
          }
          onClick={() => setTab("product")}
          ref={productRef}
        >
          Products ( {products.length} )
        </button>
      </Link>

      <Link to={"/cart"}>
        {" "}
        <button
          style={{ boxShadow: "0 0 0.25rem gray", position: "relative" }}
          className={
            " btn " + (tab === "cart" ? "btn-primary" : ") btn-outline-primary")
          }
          onClick={() => setTab("cart")}
          ref={cartRef}
        >
          Carts
          {cart.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length < 10 ? cart.length : "10+"}
              <span class="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>

      <button
        className="btn btn-outline-danger mx-3"
        onClick={() => setToken("")}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
