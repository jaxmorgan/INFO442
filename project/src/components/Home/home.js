import React from 'react';
import Items from '../Items/items';
import Item from '../Items/items';
import SideFilter from './sidefilter';

export default function Home(props) {

  return (
    <main>
      <header>
      </header>
  <div class="row">
  <div class="column">
    <img class="homeImg" src="../../../img/wood-stool.webp"/>
  </div>
  </div>
  
  <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <SideFilter />
    </div>
    <div class="col">
    <Items />
    </div>
  </div>
  </div>

      <div>
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