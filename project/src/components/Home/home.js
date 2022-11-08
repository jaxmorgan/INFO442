import React from 'react';
import Items from '../Items/items';
import Item from '../Items/items';
import SideFilter from './sidefilter';

export default function Home(props) {

  return (
    <main>
      <header className="column-container">
          <div class="text-block">
            <div className="welcome-to-source"><a href="/About">Welcome to Source</a></div>
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