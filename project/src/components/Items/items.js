import React from 'react';
import { useState } from 'react';

export default function Items(props) {
    return (
        <div className="flex-item">
            <div className="card">
                <img src={props.img} className="card-img-top" alt={props.id}></img>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>

                </div>
            </div>
        </div>
    )
}