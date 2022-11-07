import React from 'react';
import Items from '../Items/items';
import Item from '../Items/items';
import JobSelectForm from './sidefilter';

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
      <Items />

      <div>
      <JobSelectForm />
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