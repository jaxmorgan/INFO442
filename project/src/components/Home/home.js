import React from 'react';
import Items from '../Items/items';
import Item from '../Items/items';
import SideFilter from './sidefilter';
import { ItemsContent } from '../../data/productsData';
import { useState } from 'react';
import { NoItem } from '../../data/noData';
import { useEffect } from 'react';
import Cart from '../Cart/cart';

export default function Home(props) {

  const [products] = useState(ItemsContent);

  let displayedData;


  //SEARCH

  const value = 'defult';

  const [search, setSearch] = useState(value);

  useEffect(() => { setSearch(value) }, [value])



  const applySearch = (search1) => {

    setSearch({ query: search1 })

  }

  let searchData = 'none';

  if(search.query === undefined){

    searchData = 'none'


  }else{

    searchData = search.query
    

  }

  if (searchData === 'none') {
    displayedData = products;
  } else {
    displayedData = products.filter(show => show.supplier.toLowerCase().includes(searchData.toLowerCase()) || show.name.toLowerCase().includes(searchData.toLowerCase()) || show.status.toLowerCase().includes(searchData.toLowerCase()) || show.type.toLowerCase().includes(searchData.toLowerCase()));
  }


  const hookArray = useState({ type: 'Show all types' });
  const filter = hookArray[0];
  const setFilter = hookArray[1];



  if (filter.type === "Show all types" || filter.type === '') {
    displayedData = displayedData;
  } else {
    displayedData = products.filter(
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


  const ITEM_PRODUCTS = 'products';
  const ITEM_CART = 'cart';
  const [page, setPage] = useState(ITEM_PRODUCTS);




  const navigateTo = (cartPage) => {
    setPage(cartPage);
  };



  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    setCart(cart)
  }, [cart]);
  const addToCart = (product) => {  
    //setCart([...cart, product]);
    const newCart = [...cart];
    newCart.push(product);
    setCart(newCart);

    console.log(cart);

  };

  const removeFromCart = (removeProduct) => {
    setCart(cart.filter((product) => product !== removeProduct)
    );
  };




  return (
    <main>
      <header className="column-container">
        <div className="text-block">
          <p className="shop-sustainably">Live & Shop</p>
          <p className="shop-sustainably">Sustainably.</p>
        </div>
      </header>

      <div>
        <header>
          <button className="enterCart" onClick={() => navigateTo(ITEM_CART)}>
            Go to Cart ({cart.length})
          </button>

          <button className="enterShopping" onClick={() => navigateTo(ITEM_PRODUCTS)}>
            View Products
          </button>
        </header>
        {page === ITEM_CART && (
          <Cart cart={cart} setCart={setCart} />
        )}
      </div>

      <div class="two-col-container">
        <SideFilter applyFilterCallback={applyFilter} applySearchCallback={applySearch} />
        <div className="">
          <Item data={displayedData} addToCart={addToCart}/>
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