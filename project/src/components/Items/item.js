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
                    <button className="cart-button" onclick="submit()"><img className="add-to-cart" src="https://thenounproject.com/api/private/icons/3493367/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23DFF0DF&backgroundShapeOpacity=1&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjapcd9kxFcuACyNmdCm8BKJzrLV4btulhCgtKqWDxJRbfdDAHWrEsS1aAXEfUfAb93jDww54m1BC8zlmkmhgYrTPaWg%3D%3D" /></button>
                </div>
            </div>
        </div>
    )
}