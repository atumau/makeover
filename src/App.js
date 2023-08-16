import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Slider from "./components/Slider";
import Login from "./components/Login";
import Services from "./components/Services";
import Home from "./components/Home";
import Products from "./components/Products";
import Blogs from "./components/Blogs";
import Cart from "./components/Cart";
import BookService from "./components/BookService";

function App() {
  return (
    <Router>
    <Header/>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bookservice" element={<BookService/>} />
          
          <Route path="/slider" element={<Slider />} />
          <Route path="/cards" element={<Cards />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart/>} />
          

        </Routes>
      </>
      <Footer/>
    </Router>
  );
}

export default App;
