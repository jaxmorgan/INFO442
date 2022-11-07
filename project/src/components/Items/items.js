import Item from "./item"

const ItemsContent = [{
  
    "name":"Penn Chair", 
    "type":"chair", 
    "price":"$349",
    "img":"./img/penn-chair-o.jpg", 
    "id":"1", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/products/penn-chair-h6480/?pkey=cliving-room-chairs", 
    "addedToCart":"No"}, 
  
    {"name":"The City Table", 
    "type":"table", 
    "price":"$595",
    "img":"./img/city-table.webp", 
    "id":"2", 
    "supplier":"Sabai", 
    "supplierLink":"https://sabai.design/products/the-city-table?variant=42221291208864", 
    "addedToCart":"No"},
  
    {"name":"Chella Hanging Mirror", 
    "type":"decoration", 
    "price":"$199",
    "img":"./img/mirror.webp", 
    "id":"3", 
    "supplier":"Oliver Space", 
    "supplierLink":"https://www.oliver.space/products/chella-hanging-mirror-2", 
    "addedToCart":"No"},
  
    {"name":"Ason Sofa", 
    "type":"sofa", 
    "price":"$1971",
    "img":"./img/ason-sofa.webp", 
    "id":"4", 
    "supplier":"Medley Home", 
    "supplierLink":"https://medleyhome.com/collections/sofas/products/ason-sofa", 
    "addedToCart":"No"},
  
    {"name":"Dean Nightstand", 
    "type":"table", 
    "price":"$465",
    "img":"./img/nightstand.jpg", 
    "id":"5", 
    "supplier":"Haiku Designs", 
    "supplierLink":"https://www.haikudesigns.com/dean-nightstand", 
    "addedToCart":"No"},
  
    {"name":"Espresso Otto Dining Chair in Rose Quartz", 
    "type":"chair", 
    "price":"$179",
    "img":"./img/otto-side-chair.jpg", 
    "id":"6", 
    "supplier":"Inside Weather", 
    "supplierLink":"https://insideweather.com/products/oo1110it-espresso-otto-dining-chair-in-rose-quartz", 
    "addedToCart":"No"},
  
    {"name":"Twin Haven Bed Frame in Espresso", 
    "type":"bed", 
    "price":"$1099",
    "img":"./img/twin-haven-bed.jpg", 
    "id":"7", 
    "supplier":"Inside Weather", 
    "supplierLink":"https://insideweather.com/products/he101311ci-twin-haven-bed-frame-in-espresso", 
    "addedToCart":"No"},
  
    {"name":"Wood Stool", 
    "type":"table", 
    "price":"$329",
    "img":"./img/wood-stool.webp", 
    "id":"8", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/products/zero-waste-wood-stool?utm_medium=cpc&utm_source=google&gclid=CjwKCAjwwL6aBhBlEiwADycBIAflfYJII5_7Dt7R8kHMBFwU8brhJnQAGZMjkTZ4OawM8Ng8_-RX2hoCsekQAvD_BwE", 
    "addedToCart":"No"},
  
    {"name":"The Bed", 
    "type":"bed", 
    "price":"$600",
    "img":"./img/thuma-bed.webp", 
    "id":"9", 
    "supplier":"Thuma", 
    "supplierLink":"https://www.thuma.co/products/the-bed?currency=USD&variant=12320329400425&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&gclid=CjwKCAjwwL6aBhBlEiwADycBIEz6TIJn5uCz7LXd61sJmneajix5jiw8RiJkvZIUBN-Oh2FOa1xNwBoCuCoQAvD_BwE", 
    "addedToCart":"No"},
  
    {"name":"Bend Wall Shelf With Hooks", 
    "type":"organization", 
    "price":"$149",
    "img":"./img/hooks.webp", 
    "id":"10", 
    "supplier":"Room&Board", 
    "supplierLink":"https://www.roomandboard.com/catalog/dining-and-kitchen/shelves-and-ledges/bend-wall-shelf-with-hooks", 
    "addedToCart":"No"},
  
    {"name":"Wood Coffee Table", 
    "type":"table", 
    "price":"$599",
    "img":"./img/wood-coffee-table.webp", 
    "id":"11", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/collections/furniture/products/zero-waste-coffee-table", 
    "addedToCart":"No"},
  
    {"name":"Natural Wood Dresser", 
    "type":"dresser", 
    "price":"$2799",
    "img":"./img/natural-wood-dresser.webp", 
    "id":"12", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/collections/beds-furniture-1/products/natural-wood-dresser", 
    "addedToCart":"No"},
  
    {"name":"Malibu Wood Dresser", 
    "type":"dresser", 
    "price":"$1939",
    "img":"./img/malibu-wood-dresser.webp", 
    "id":"13", 
    "supplier":"Avocado", 
    "supplierLink":"https://www.avocadogreenmattress.com/collections/beds-furniture-1/products/malibu-wood-dresser", 
    "addedToCart":"No"},
  
    {"name":"Yamazaki Slim Rolling Storage Cart", 
    "type":"organization", 
    "price":"$72",
    "img":"./img/yamazaki-slim-rolling-storage-cart", 
    "id":"14", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/products/rolling-storage-cart-d6530/?pkey=chome-storage-solutions", 
    "addedToCart":"No"},
  
    {"name":"Callan Sofa", 
    "type":"sofa", 
    "price":"$749",
    "img":"./img/callan-sofa.webp", 
    "id":"15", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/products/callan-sofa-h11443/?pkey=csofas", 
    "addedToCart":"No"},
  
    {"name":"Mid-Century 6-Drawer Dresser", 
    "type":"dresser", 
    "price":"$1399",
    "img":"./img/mid-centry-6-dresser-drawer.webp", 
    "id":"16", 
    "supplier":"West Elm", 
    "supplierLink":"https://www.westelm.com/products/mid-century-6-drawer-dresser-g815/?pkey=cdressers", 
    "addedToCart":"No"},
  
    {"name":"The Essential Sofa", 
    "type":"sofa", 
    "price":"$1395",
    "img":"./img/the-essential-sofa.png", 
    "id":"17", 
    "supplier":"Sabai", 
    "supplierLink":"https://sabai.design/products/the-essential-sofa-last?variant=41352768913568", 
    "addedToCart":"No"},
  
    {"name":"The Side Table", 
    "type":"table", 
    "price":"$295",
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
            <Item key={index} name={element.name} price={element.price} img={element.img} />
          )}
        </div>
      </main>
    )
  }
  
 