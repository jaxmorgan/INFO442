import React from 'react';
import { useState } from 'react';
import  Item  from '../Items/item.js';


export default function Cart(props) {
    return (
        <div>
            <div className="two-col-container">
                <div className="flex-container">
                {props.data.map((element, index) =>
                    <Item key={index} name={element.name} price={element.price} delivery={element.delivery} supplier={element.supplier} supplierLink={element.supplierLink} img={element.img} />
                )}
                </div>
                <div className="payment-form">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center">
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Cardholder's Name</label><input type="text" className="form-control form-control-lg" placeholder="cardholder's name"/></div>
                            <div className="col-md-12"><label className="labels">Shipping Address</label><input type="text" className="form-control form-control-lg" placeholder="shipping address"/></div>
                            <div className="col-md-12"><label className="labels">Card Number</label><input type="text" className="form-control form-control-lg" placeholder="card number"/></div>
                            <div className="col-md-12"><label className="labels">Billing Address</label><input type="text" className="form-control form-control-lg" placeholder="billing address"/></div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">Expiration</label><input type="text" className="form-control form-control-lg" placeholder="expiration" /></div>
                            <div className="col-md-6"><label className="labels">CVV</label><input type="text" className="form-control form-control-lg" placeholder="cvv" /></div>
                        </div>
                        <div className="button-text"><button className="btn btn-primary" type="button">Purchase</button></div>
                    </div>
                </div>
            </div>
    <footer>
    <div>
      <p>Source</p>
      <p>&copy; 2022 INFO442 Project</p>
    </div>
    </footer>
    </div>
    )
}