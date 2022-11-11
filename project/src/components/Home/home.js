import React from 'react';
import Items from '../Items/items';
import Item from '../Items/items';
import SideFilter from './sidefilter';

export default function Home(props) {

  return (
    <main>
      <header className="column-container">
          <div class="text-block">
            <p className="shop-sustainably">Live & Shop</p>
            <p className="shop-sustainably">Sustainably.</p>
            </div>
      </header>
  
  <div class="two-col-container">
    <SideFilter />
    <Items />
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