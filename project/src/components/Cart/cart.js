import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";
import Item from '../Items/item';
import Items from '../Items/items';
import { ItemsContent } from "../../data/productsData";

export default function Cart(props) {

  const {cart, setCart} = props




  //first name
  const [cardName, setCardName] = useState("");





  const handleChangeA = (e) => {
    setCardName(e.target.value);
    localStorage.setItem("inputValue-a", e.target.value);
  };

  useEffect(() => {
    setCardName(localStorage.getItem("inputValue-a"));
  }, []);

  //Shipping Address
  const [shippingAddress, setShippingAddress] = useState("");

  const handleChangeB = (e) => {
    setShippingAddress(e.target.value);
    localStorage.setItem("inputValue-b", e.target.value);
  };

  useEffect(() => {
    setShippingAddress(localStorage.getItem("inputValue-b"));
  }, []);

  //Card Number
  const [cardNumber, setCardNumber] = useState("");

  const handleChangeC = (e) => {
    setCardNumber(e.target.value);
    localStorage.setItem("inputValue-c", e.target.value);
  };

  useEffect(() => {
    setShippingAddress(localStorage.getItem("inputValue-c"));
  }, []);

  //Billing Address
  const [billingAddress, setBillingAddress] = useState("");

  const handleChangeD = (e) => {
    setBillingAddress(e.target.value);
    localStorage.setItem("inputValue-d", e.target.value);
  };

  useEffect(() => {
    setBillingAddress(localStorage.getItem("inputValue-d"));
  }, []);

  //Expiration
  const [expiration, setExpiration] = useState("");

  const handleChangeE = (e) => {
    setExpiration(e.target.value);
    localStorage.setItem("inputValue-e", e.target.value);
  };

  useEffect(() => {
    setExpiration(localStorage.getItem("inputValue-e"));
  }, []);

  //cvv
  const [cvv, setCvv] = useState("");

  const handleChangeF = (e) => {
    setCvv(e.target.value);
    localStorage.setItem("inputValue-f", e.target.value);
  };

  useEffect(() => {
    setCvv(localStorage.getItem("inputValue-f"));
  }, []);



  //THIS TAKES CARE OF CART ITEMS

  const removeFromCart = (removeProduct) => {
    setCart(
      cart.filter((product) => product !== removeProduct)
    );

    console.log(cart)
  };


const navigate = useNavigate();

const navigateConfirmation = () => {
  navigate('/verification');
};


  // const cart = ItemsContent.filter((item) => {props.cart.includes(item.name)})
  // console.log(cart)

  return (
    <div>
      <div className="">
        <div className="col">
          <div className="payment-form">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center"></div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Cardholder's Name</label>
                  <input
                    value={cardName}
                    onChange={handleChangeA}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="cardholder's name"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Shipping Address</label>
                  <input
                    value={shippingAddress}
                    onChange={handleChangeB}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="shipping address"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Card Number</label>
                  <input
                    value={cardNumber}
                    onChange={handleChangeC}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="card number"
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Billing Address</label>
                  <input
                    value={billingAddress}
                    onChange={handleChangeD}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="billing address"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Expiration</label>
                  <input
                    value={expiration}
                    onChange={handleChangeE}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="expiration"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={handleChangeF}
                    className="form-control form-control-lg"
                    placeholder="cvv"
                  />
                </div>
              </div>
              <div className="button-text">
                <button onClick={navigateConfirmation} className="btn btn-primary" type="button">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">

          <div className="flex-container">
            {/* {
              ItemsContent.map((element, index) => {
                //if (element.name) {
                {console.log(index)}
                <Item key={index} name={element.name} price={element.price} delivery={element.delivery} supplier={element.supplier} supplierLink={element.supplierLink} img={element.img} />;
                //}
              })
            } */}
      <>
      <div className="flex-container">
        {cart.map((product, idx) => (
          <div className="card" key={idx}>
          <img src={product.img} className="card-img-top" alt={product.id}></img>
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text-price">{product.price}</p>
        <p className="card-text"> Delivery: {product.delivery}</p>
        <p className="card-text"> Supplier: {product.supplier}</p>
        <button className="remove-product" onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
          </div>
        </div>
      </div>
    </div>
  );
}
