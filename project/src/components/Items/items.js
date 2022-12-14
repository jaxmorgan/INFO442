
import { ItemsContent } from "../../data/productsData"
import Item from "./item"
import Cart from '../Cart/cart';
import { useState } from 'react';


export default function Items(props) {
  
  const { addToCart } = props;

  return (
    <main>



      <div className="flex-container">
        {props.data.map((element, index) =>
          <Item key={index} name={element.name} price={element.price} delivery={element.delivery} supplier={element.supplier} supplierLink={element.supplierLink} img={element.img} alt={element.name} addToCart={addToCart} />
        )}
      </div>
    </main>
  )
}

