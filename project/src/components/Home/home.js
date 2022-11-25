import React from 'react';
import Items from '../Items/items';
import Item from '../Items/items';
import SideFilter from './sidefilter';
import { ItemsContent } from '../../data/productsData';
import { useState } from 'react';
import { NoItem } from '../../data/noData';
import { useEffect } from 'react';

export default function Home(props) {


  let displayedData;


  //SEARCH

  const value = 'defult';

  const [search,setSearch] = useState(value);

  useEffect(() => { setSearch(value)}, [value] )
  


  const applySearch = (search1) => {

    setSearch({ query: search1 })
    //console.log(search.query)

  }

  
  

  
  if (search.query === '') {
    //console.log('no search')
    //console.log(search.query)
    displayedData = ItemsContent;
  } else {

  
    //need a way to filter data here
    // what in the type box already here
    //console.log('have search', search.query);
    //console.log(ItemsContent.filter(show => show.supplier.includes(search.query)));


    displayedData = ItemsContent.filter(show => show.supplier.toLowerCase().includes(search.query)||show.name.toLowerCase().includes(search.query)||show.status.toLowerCase().includes(search.query)||show.type.toLowerCase().includes(search.query));
  }


  const hookArray = useState({ type: 'Show all types' });
  const filter = hookArray[0];
  const setFilter = hookArray[1];



  if (filter.type === "Show all types" || filter.type === '') {
    displayedData = displayedData;
  } else {
    displayedData = ItemsContent.filter(
      (n) => {
        return n.type === filter.type;
      }
    );
  }

  if (filter.supplier === '') {
    displayedData = displayedData;
  } else {
    displayedData = displayedData.filter(
      (n) => {
        return n.supplier === filter.supplier;
      }
    );
  }

  if (filter.status === '') {
    displayedData = displayedData;
  } else {
    displayedData = displayedData.filter(
      (n) => {
        return n.status === filter.status;
      }
    );
  }

  if (filter.range === '') {
    displayedData = displayedData;
  } else {
    displayedData = displayedData.filter(
      (n) => {
        return n.range === filter.range;
      }
    );
  }

  function isEmptyObject(obj) {
    return !Object.keys(obj).length;
  }

  if (isEmptyObject(displayedData)) {

    displayedData = NoItem

  }

  const applyFilter = (filter1, filter2, filter3, filter4) => {

    setFilter({ type: filter1, supplier: filter2, status: filter3, range: filter4 }); //update the state to be a new value
  }



  const addToCart = props.addToCart
  
  return (
    <main>
      <header className="column-container">
        <div className="text-block">
          <p className="shop-sustainably">Live & Shop</p>
          <p className="shop-sustainably">Sustainably.</p>
        </div>
      </header>

      <div class="two-col-container">
        <SideFilter applyFilterCallback={applyFilter} applySearchCallback={applySearch} />
        <div className="flex-container">
          <Items data={displayedData} addToCart={addToCart} />
        </div>


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