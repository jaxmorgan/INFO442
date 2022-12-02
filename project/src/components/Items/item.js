import React from 'react';
import { useState } from 'react';

export default function Item(props) {

  const handleButtonAddCart = e => {
      e.preventDefault()
      props.addToCart(props)
  }

  return (


    <div>

      <div className="card">

        <img src={props.img} className="card-img-top" alt={props.id}></img>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p className="card-text-price">{props.price}</p>
          <p className="card-text"> Delivery: {props.delivery}</p>
          <p className="card-text"> Supplier: {props.supplier}</p>
          <div className="cart-button" id="cart" > <img className="add-to-cart"  onClick= {handleButtonAddCart}  src="..\..\..\img\cart-icon-3.png"/> </div>
          <button className="supplier-button"><a href={props.supplierLink} target="blank">Supplier Sustainability</a></button>
        </div>
      </div>
    </div>
  )
}