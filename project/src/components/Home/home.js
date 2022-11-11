import React from 'react';
import Items from '../Items/items';
import Item from '../Items/items';
import SideFilter from './sidefilter';
import { ItemsContent } from '../../data/productsData';
import { useState } from 'react';

export default function Home(props) {


  const hookArray = useState({type: 'Show all items', supplier: 'Show all items'});
  const filter = hookArray[0];
  const setFilter = hookArray[1];

  

  let displayedData;

  if (filter.type === "Show all items") {
    displayedData = ItemsContent;
  } else {
    displayedData = ItemsContent.filter(
      (n) => {
        return n.type === filter.type;
      }
    );
  }

  const applyFilter = (filter1, filter2) => {
    setFilter({ type: filter1, supplier: filter2 });
}






  return (
    <main>
      <header className="column-container">
          <div class="text-block">
            <p className="shop-sustainably">Live & Shop</p>
            <p className="shop-sustainably">Sustainably.</p>
            </div>
      </header>
  
  <div class="two-col-container">
    <SideFilter applyFilterCallback={applyFilter}/>
    <Items data={displayedData}/>
  </div>

      <footer>
        <div>
          <p>Source</p>
          <p>&copy; 2022 INFO442 Project</p>
        </div>
      </footer>
    </main>

  )
}