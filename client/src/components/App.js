import React from "react";
import { Routes,Route } from "react-router-dom";
import "../App.scss";
import "../index.scss";
import Header from "./header/header.component";
import Home from "./home/home.component";
import Footer from "./footer/footer.component";
import ProductListing from "../components/ProductListing/ProductListing.component";
import Login from "./login/login.component";
import Register from "../components/register/Register.component";
import Cart from "../components/cart/cart.component";
import PageNotFound from "../components/pagenotfound/pagenotfound.component ";
import GoToTop from "../components/GotoTop/gototop";
import ModalContextProvider from "../components/context/modalcontext";
export default function App() {
  return (
    <React.Fragment>

        <ModalContextProvider>
          
          <Header />
          <GoToTop />
          <div className="main-body">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductListing />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
         
        </ModalContextProvider>
    </React.Fragment>
  );
}
