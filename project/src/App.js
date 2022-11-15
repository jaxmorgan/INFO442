import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useSearchParams } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/navbar.js';
import About from './components/About/about.js';
import Home from './components/Home/home.js';
import Account from './components/Account/account.js';
import Cart from './components/Cart/cart.js';
import Items from './components/Items/items';
import { ItemsContent } from './data/productsData';
import { useState } from 'react';


export default function App(props) {
  // let [searchParams, setSearchParams] = useSearchParams();

  // function handleFilter(event) {
  //   event.preventDefault();
  //   // The serialize function here would be responsible for
  //   // creating an object of { key: value } pairs from the
  //   // fields in the form that make up the query.
  //   let params = searchParams.get("text");
  //   setSearchParams(params);
  // }

  // Routes replaces Switch and Navigate replaces Redirect

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([])

  const handleClick = (item) => {

    // Add to cart
    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 } // <-- initial amount 1
    ]);
    console.log(cart)
  };
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const queryFilter = {
    query: urlParams.get('query'),
    filter: urlParams.get('filter'),
    supplier: urlParams.get('supplier'),
    range: urlParams.get('range')
  }

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/Home" element={<Home filter={queryFilter} addCart={handleClick}/>} />
          <Route path="/" render={() => <Navigate to="/Home"/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Home/>} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Cart" element={<Cart data={cart}/>} />
        </Routes>
      </Router>
      
    </div>
  );
}