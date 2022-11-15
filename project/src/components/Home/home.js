import React from 'react';
import Items from '../Items/items';
import Item from '../Items/items';
import SideFilter from './sidefilter';
import { ItemsContent } from '../../data/productsData';
import { useState } from 'react';
import { NoItem } from '../../data/noData';

export default function Home(props) {

//SEARCH

let [displayedSearchItems, setDisplayedSearchItems] = useState(props.items);
// controls what job cards are displayed after user types into search box
  function searchFilter(search) {
    search.preventDefault();
    if (search === '') {
      setDisplayedSearchItems(props.items);
    } else if (search != '') {
      let cartCardsBySearch = props.items.filter(item => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item;
        } else if (item.supplier.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      })
      setDisplayedSearchItems(cartCardsBySearch);
    }
  }


  const hookArray = useState({ type: 'Show all types' });
  const filter = hookArray[0];
  const setFilter = hookArray[1];



  let displayedData;

  if (filter.type === "Show all types" || filter.type === '') {
    displayedData = ItemsContent;
  } else{
    displayedData = ItemsContent.filter(
      (n) => {
        return n.type === filter.type;
      }
    );
  }

  if (filter.supplier === '') {
    displayedData = displayedData;
  } else{
    displayedData = displayedData.filter(
      (n) => {
        return n.supplier === filter.supplier;
      }
    );
  }

  if (filter.status === '') {
    displayedData = displayedData;
  } else{
    displayedData = displayedData.filter(
      (n) => {
        return n.status === filter.status;
      }
    );
  }

  if (filter.range === '') {
    displayedData = displayedData;
  } else{
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








  return (
    <main>
      <header className="column-container">
        <div className="text-block">
          <p className="shop-sustainably">Live & Shop</p>
          <p className="shop-sustainably">Sustainably.</p>
        </div>
      </header>

      <div class="two-col-container">
        <SideFilter applyFilterCallback={applyFilter} applySearchCallback={searchFilter}/>
        <div className="flex-container">
        <Items data={displayedData} />
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