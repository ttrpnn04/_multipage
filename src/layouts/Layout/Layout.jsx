import { Outlet } from "react-router";

import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout({ products, cart, setToken }) {
  return (
    <>
      <Header />
      <Navbar products={products} cart={cart} setToken={setToken}/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
