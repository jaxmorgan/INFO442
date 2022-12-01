import React from 'react';
import { useState } from 'react';
import Cart from '../Cart/cart';

export default function Item() {

    // const handleButtonAddCart = e => {
    //     e.preventDefault()
    //     props.addToCart(props.name)
    //     console.log(props.name)
    // }

     const ITEM_PRODUCTS = 'products';
     const ITEM_CART = 'cart';

     const [cart, setCart] = useState([]);
     const [page, setPage] = useState(ITEM_PRODUCTS);
   

    const [products] = useState([
    {"name":"Penn Chair", 
    "type":"chair", 
    "price":"$174.99",
    "range":"low",
    "delivery":"1-2 days",
    "img":"./img/penn-chair-o.jpg", 
    "status": "new",
    "id":"1", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/pages/about-west-elm/?cm_re=sitewidebanner-_-default-_-Sustainability", 
    "addedToCart":"No"}, 
  
    {"name":"The City Table", 
    "type":"table", 
    "price":"$297.99",
    "range":"low",
    "delivery":"Next Day",
    "img":"./img/city-table.webp", 
    "status": "new",
    "id":"2", 
    "supplier":"Sabai", 
    "supplierLink":"https://sabai.design/pages/sustainability", 
    "addedToCart":"No"},
  
    {"name":"Chella Hanging Mirror", 
    "type":"decoration", 
    "price":"$99.99",
    "range":"low",
    "delivery":"4 days",
    "img":"./img/mirror.webp", 
    "status": "used",
    "id":"3", 
    "supplier":"Oliver Space", 
    "supplierLink":"https://www.oliver.space/about-us", 
    "addedToCart":"No"},
  
    {"name":"Ason Sofa", 
    "type":"sofa", 
    "price":"$985.99",
    "range":"mid",
    "delivery":"2-4 days",
    "img":"./img/ason-sofa.webp", 
    "status": "used",
    "id":"4", 
    "supplier":"Medley Home", 
    "supplierLink":"https://medleyhome.com/pages/eco-friendly-furniture", 
    "addedToCart":"No"},
  
    {"name":"Dean Nightstand", 
    "type":"table", 
    "price":"$232.99",
    "range":"low",
    "delivery":"5-7 days",
    "img":"./img/nightstand.jpg", 
    "status": "new",
    "id":"5", 
    "supplier":"Haiku Designs", 
    "supplierLink":"https://www.haikudesigns.com/about", 
    "addedToCart":"No"},
  
    {"name":"Espresso Otto Dining Chair", 
    "type":"chair", 
    "price":"$89.99",
    "range":"low",
    "delivery":"1-2 days",
    "img":"./img/otto-side-chair.jpg", 
    "status": "new",
    "id":"6", 
    "supplier":"Inside Weather", 
    "supplierLink":"https://insideweather.com/pages/sustainability", 
    "addedToCart":"No"},
  
    {"name":"Twin Haven Bed Frame", 
    "type":"bed", 
    "price":"$549.99",
    "range":"mid",
    "delivery":"2 weeks",
    "img":"./img/twin-haven-bed.jpg",
    "status": "used", 
    "id":"7", 
    "supplier":"Inside Weather", 
    "supplierLink":"https://insideweather.com/pages/sustainability", 
    "addedToCart":"No"},
  
    {"name":"Avocado Wood Stool", 
    "type":"table", 
    "price":"$164.99",
    "range":"low",
    "delivery":"3 days",
    "img":"./img/avocado-wood-stool.webp", 
    "status": "used",
    "id":"8", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/pages/2021-impact-report", 
    "addedToCart":"No"},
  
    {"name":"The Cloud Bed", 
    "type":"bed", 
    "price":"$300.99",
    "range":"low",
    "delivery":"10 days",
    "img":"./img/thuma-bed.webp", 
    "status": "new",
    "id":"9", 
    "supplier":"Thuma", 
    "supplierLink":"https://www.thuma.co/pages/about", 
    "addedToCart":"No"},
  
    {"name":"Bend Wall Shelf", 
    "type":"organization", 
    "price":"$75.99",
    "range":"low",
    "delivery":"1-2 days",
    "img":"./img/hooks.webp", 
    "status": "new",
    "id":"10", 
    "supplier":"Room Board", 
    "supplierLink":"https://www.roomandboard.com/about-us/sustainable-furniture", 
    "addedToCart":"No"},
  
    {"name":"Wood Coffee Table", 
    "type":"table", 
    "price":"$299.99",
    "range":"low",
    "delivery":"4 days",
    "img":"./img/Avocado-Wood-Coffee-Table.webp", 
    "status": "used",
    "id":"11", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/pages/2021-impact-report", 
    "addedToCart":"No"},
  
    {"name":"Natural Wood Dresser", 
    "type":"dresser", 
    "price":"$1,399.99",
    "range":"high",
    "delivery":"1 week",
    "img":"./img/natural-wood-dresser.webp", 
    "status": "used",
    "id":"12", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/pages/2021-impact-report", 
    "addedToCart":"No"},
  
    {"name":"Malibu Wood Dresser", 
    "type":"dresser", 
    "price":"$969.99",
    "range":"mid",
    "delivery":"1-2 days",
    "img":"./img/malibu-wood-dresser.webp", 
    "status": "new",
    "id":"13", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/pages/2021-impact-report", 
    "addedToCart":"No"},
  
    {"name":"Yamazaki Rolling Cart", 
    "type":"organization", 
    "price":"$36.99",
    "range":"low",
    "delivery":"2 days",
    "img":"./img/rolling-storage-cart.jpg", 
    "status": "new",
    "id":"14", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/pages/about-west-elm/?cm_re=sitewidebanner-_-default-_-Sustainability", 
    "addedToCart":"No"},
  
    {"name":"Callan Sofa", 
    "type":"sofa", 
    "price":"$374.99",
    "range":"low",
    "delivery":"12 days",
    "img":"./img/callan-sofa.jpg", 
    "status": "used",
    "id":"15", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/pages/about-west-elm/?cm_re=sitewidebanner-_-default-_-Sustainability", 
    "addedToCart":"No"},
  
    {"name":"Mid-Century Dresser", 
    "type":"dresser", 
    "price":"$699.99",
    "range":"mid",
    "delivery":"4 days",
    "img":"./img/mid-century-dresser.jpg", 
    "status": "used",
    "id":"16", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/pages/about-west-elm/?cm_re=sitewidebanner-_-default-_-Sustainabilitys", 
    "addedToCart":"No"},
  
    {"name":"The Essential Sofa", 
    "type":"sofa", 
    "price":"$697.99",
    "range":"mid",
    "delivery":"3 weeks",
    "img":"./img/the-essential-sofa.png", 
    "status": "new",
    "id":"17", 
    "supplier":"Sabai", 
    "supplierLink":"https://sabai.design/pages/sustainability", 
    "addedToCart":"No"},
  
    {"name":"The Cozy Side Table", 
    "type":"table", 
    "price":"$148.99",
    "range":"low",
    "delivery":"8 days",
    "img":"./img/the-side-table.webp", 
    "status": "new",
    "id":"18", 
    "supplier":"Thuma", 
    "supplierLink":"https://www.thuma.co/pages/about", 
    "addedToCart":"No"}
    ]);

    const addToCart = (product) => {
        console.log('hello world');
        setCart([...cart, product ]);
    };

    const removeFromCart = (removeProduct) => {
        setCart(cart.filter((product) => product !== removeProduct)
        );
    };

    const navigateTo = (cartPage) => {
        setPage(cartPage);
    };

    return (
        <div>
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
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
    <div  className="card" >
        {products.map((product, idx) => (
        <div className="product" key={idx}>
        <img src={product.img} className="card-img-top" alt={product.id}></img>
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text-price">{product.price}</p>
        <p className="card-text"> Delivery: {product.delivery}</p>
        <p className="card-text"> Supplier: {product.supplier}</p>
        <button className="cart-button" onClick={() => addToCart(product)}><img className="add-to-cart" src="..\..\..\img\cart-icon-3.png"/></button>
        <button className="supplier-button"><a href={product.supplierLink} target="blank">Supplier Sustainability</a></button>
        </div>
        ))}
        </div>
     </div>
        );
    }

    // return (
    //     <div>
    //         <div className="card">
    //             <img src={props.img} className="card-img-top" alt={props.id}></img>
    //             <div className="card-body">
    //                 <h2 className="card-title">{props.name}</h2>
    //                 <p className="card-text-price">{props.price}</p>
    //                 <p className="card-text"> Delivery: {props.delivery}</p>
    //                 <p className="card-text"> Supplier: {props.supplier}</p>
    //                 <button className="cart-button" onClick={() => addToCart(product)}><img className="add-to-cart" src="..\..\..\img\cart-icon-3.png"/></button>
    //                 <button className="supplier-button"><a href={props.supplierLink} target="blank">Supplier Sustainability</a></button>
    //             </div>
    //         </div>
    //     </div>
    // )