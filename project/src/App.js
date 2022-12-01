import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useSearchParams } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/navbar.js';
import About from './components/About/about.js';
import Home from './components/Home/home.js';
import Account from './components/Account/account.js';
import Cart from './components/Cart/cart.js';
import Verification from './components/Cart/verification.js';
import Items from './components/Items/items';
import { ItemsContent } from './data/productsData';
import { useState } from 'react';


export default function App(props) {

  // useEffect(() => {
  //   setCart(JSON.parse(window.localStorage.getItem('cart')));
  // }, []);

  // const addToCart = (item) => {
  //   // Add to cart
  //   if (cart.filter(e => e.name === item).length > 0) {
  //     // if item already in cart, add amount to the item
  //     cart.map(cartItem => {
  //       if (cartItem.name === item) {
  //         cartItem.amount += 1;
  //       }
  //     })
  //   } else {
  //     setCart((cart) => [
  //       ...cart,
  //       { name: item, amount: 1 } // <-- initial amount 1
  //     ]); 
  //   }
  // };
  
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart]);

  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const queryFilter = {
  //   query: urlParams.get('query'),
  //   filter: urlParams.get('filter'),
  //   supplier: urlParams.get('supplier'),
  //   range: urlParams.get('range')
  // }

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/" render={() => <Navigate to="/Home"/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Home/>} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Verification" element={<Verification/>} />
        </Routes>
      </Router>
      
    </div>
  );
}