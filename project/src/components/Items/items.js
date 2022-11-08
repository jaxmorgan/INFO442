import Item from "./item"

const ItemsContent = [{
  
    "name":"Penn Chair", 
    "type":"chair", 
    "price":"$349.99",
    "delivery":"1-2 days",
    "img":"./img/penn-chair-o.jpg", 
    "id":"1", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/products/penn-chair-h6480/?pkey=cliving-room-chairs", 
    "addedToCart":"No"}, 
  
    {"name":"The City Table", 
    "type":"table", 
    "price":"$595.99",
    "delivery":"Next Day",
    "img":"./img/city-table.webp", 
    "id":"2", 
    "supplier":"Sabai", 
    "supplierLink":"https://sabai.design/products/the-city-table?variant=42221291208864", 
    "addedToCart":"No"},
  
    {"name":"Chella Hanging Mirror", 
    "type":"decoration", 
    "price":"$199.99",
    "delivery":"4 days",
    "img":"./img/mirror.webp", 
    "id":"3", 
    "supplier":"Oliver Space", 
    "supplierLink":"https://www.oliver.space/products/chella-hanging-mirror-2", 
    "addedToCart":"No"},
  
    {"name":"Ason Sofa", 
    "type":"sofa", 
    "price":"$1,971.99",
    "delivery":"2-4 days",
    "img":"./img/ason-sofa.webp", 
    "id":"4", 
    "supplier":"Medley Home", 
    "supplierLink":"https://medleyhome.com/collections/sofas/products/ason-sofa", 
    "addedToCart":"No"},
  
    {"name":"Dean Nightstand", 
    "type":"table", 
    "price":"$465.99",
    "delivery":"5-7 days",
    "img":"./img/nightstand.jpg", 
    "id":"5", 
    "supplier":"Haiku Designs", 
    "supplierLink":"https://www.haikudesigns.com/dean-nightstand", 
    "addedToCart":"No"},
  
    {"name":"Espresso Otto Dining Chair", 
    "type":"chair", 
    "price":"$179.99",
    "delivery":"1-2 days",
    "img":"./img/otto-side-chair.jpg", 
    "id":"6", 
    "supplier":"Inside Weather", 
    "supplierLink":"https://insideweather.com/products/oo1110it-espresso-otto-dining-chair-in-rose-quartz", 
    "addedToCart":"No"},
  
    {"name":"Twin Haven Bed Frame", 
    "type":"bed", 
    "price":"$1,099.99",
    "delivery":"2 weeks",
    "img":"./img/twin-haven-bed.jpg", 
    "id":"7", 
    "supplier":"Inside Weather", 
    "supplierLink":"https://insideweather.com/products/he101311ci-twin-haven-bed-frame-in-espresso", 
    "addedToCart":"No"},
  
    {"name":"Avocado Wood Stool", 
    "type":"table", 
    "price":"$329.99",
    "delivery":"3 days",
    "img":"./img/avocado-wood-stool.webp", 
    "id":"8", 
    "supplier":"Avocado", 
    "supplierLink":"http://cdn.shopify.com/s/files/1/0444/9488/0918/products/AVO_ZERO-WASTE-WOOD-STOOL_0879_2000w.jpg?v=1655935191", 
    "addedToCart":"No"},
  
    {"name":"The Cloud Bed", 
    "type":"bed", 
    "price":"$600.99",
    "delivery":"10 days",
    "img":"./img/thuma-bed.webp", 
    "id":"9", 
    "supplier":"Thuma", 
    "supplierLink":"https://www.thuma.co/products/the-bed?currency=USD&variant=12320329400425&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&gclid=CjwKCAjwwL6aBhBlEiwADycBIEz6TIJn5uCz7LXd61sJmneajix5jiw8RiJkvZIUBN-Oh2FOa1xNwBoCuCoQAvD_BwE", 
    "addedToCart":"No"},
  
    {"name":"Bend Wall Shelf", 
    "type":"organization", 
    "price":"$149.99",
    "delivery":"1-2 days",
    "img":"./img/hooks.webp", 
    "id":"10", 
    "supplier":"Room&Board", 
    "supplierLink":"https://www.roomandboard.com/catalog/dining-and-kitchen/shelves-and-ledges/bend-wall-shelf-with-hooks", 
    "addedToCart":"No"},
  
    {"name":"Wood Coffee Table", 
    "type":"table", 
    "price":"$599.99",
    "delivery":"4 days",
    "img":"./img/Avocado-Wood-Coffee-Table.webp", 
    "id":"11", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/collections/furniture/products/zero-waste-coffee-table", 
    "addedToCart":"No"},
  
    {"name":"Natural Wood Dresser", 
    "type":"dresser", 
    "price":"$2,799.99",
    "delivery":"1 week",
    "img":"./img/natural-wood-dresser.webp", 
    "id":"12", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/collections/beds-furniture-1/products/natural-wood-dresser", 
    "addedToCart":"No"},
  
    {"name":"Malibu Wood Dresser", 
    "type":"dresser", 
    "price":"$1,939.99",
    "delivery":"1-2 days",
    "img":"./img/malibu-wood-dresser.webp", 
    "id":"13", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/collections/beds-furniture-1/products/malibu-wood-dresser", 
    "addedToCart":"No"},
  
    {"name":"Yamazaki Rolling Cart", 
    "type":"organization", 
    "price":"$72.99",
    "delivery":"2 days",
    "img":"./img/rolling-storage-cart.jpg", 
    "id":"14", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/products/rolling-storage-cart-d6530/?pkey=chome-storage-solutions", 
    "addedToCart":"No"},
  
    {"name":"Callan Sofa", 
    "type":"sofa", 
    "price":"$749.99",
    "delivery":"12 days",
    "img":"./img/callan-sofa.jpg", 
    "id":"15", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/products/callan-sofa-h11443/?pkey=csofas", 
    "addedToCart":"No"},
  
    {"name":"Mid-Century Dresser", 
    "type":"dresser", 
    "price":"$1,399.99",
    "delivery":"4 days",
    "img":"./img/mid-century-dresser.jpg", 
    "id":"16", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/products/mid-century-6-drawer-dresser-g815/?pkey=cdressers", 
    "addedToCart":"No"},
  
    {"name":"The Essential Sofa", 
    "type":"sofa", 
    "price":"$1,395.99",
    "delivery":"3 weeks",
    "img":"./img/the-essential-sofa.png", 
    "id":"17", 
    "supplier":"Sabai", 
    "supplierLink":"https://sabai.design/products/the-essential-sofa-last?variant=41352768913568", 
    "addedToCart":"No"},
  
    {"name":"The Cozy Side Table", 
    "type":"table", 
    "price":"$295.99",
    "delivery":"8 days",
    "img":"./img/the-side-table.webp", 
    "id":"18", 
    "supplier":"Thuma", 
    "supplierLink":"https://new.thuma.co/products/the-side-table?variant=39597998833769", 
    "addedToCart":"No"}]




export default function Items(props) {
    return (
      <main>
        <div className="flex-container">
          {ItemsContent.map((element, index) =>
            <Item key={index} name={element.name} price={element.price} delivery={element.delivery} supplier={element.supplier} supplierLink={element.supplierLink} img={element.img} />
          )}
        </div>
      </main>
    )
  }
  
 