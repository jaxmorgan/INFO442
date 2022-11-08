import React from 'react';
import { useState } from 'react';

export default function Item(props) {
    return (
        <div>
            <div className="card">
                <img src={props.img} className="card-img-top" alt={props.id}></img>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <p className="card-text"> Price: {props.price}</p>

                </div>
            </div>
        </div>
    )
}