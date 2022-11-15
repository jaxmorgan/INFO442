import React from 'react';
import { useState } from 'react';

export default function Cart(props) {
    return (
        <div>
        <div className="two-col-container">
        <div>
            <p>This is where cart items will goooooooooooo</p>
        </div>
        <div className="payment-form">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center">
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Cardholder's Name</label><input type="text" class="form-control form-control-lg" placeholder="cardholder's name" value="" /></div>
                    <div class="col-md-12"><label class="labels">Shipping Address</label><input type="text" class="form-control form-control-lg" placeholder="shipping address" value="" /></div>
                    <div class="col-md-12"><label class="labels">Card Number</label><input type="text" class="form-control form-control-lg" placeholder="card number" value="" /></div>
                    <div class="col-md-12"><label class="labels">Billing Address</label><input type="text" class="form-control form-control-lg" placeholder="billing address" value="" /></div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Expiration</label><input type="text" class="form-control form-control-lg" placeholder="expiration" value="" /></div>
                    <div class="col-md-6"><label class="labels">CVV</label><input type="text" class="form-control form-control-lg" value="" placeholder="cvv" /></div>
                </div>
                <div class="button-text"><button class="btn btn-primary" type="button">Purchase</button></div>
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