
import { ItemsContent } from "../../data/productsData"
import Item from "./item"



export default function Items(props) {
    const addToCart = props.addToCart
    
    return (
      <main>
        <div className="flex-container">
          {props.data.map((element, index) =>
            <Item key={index} name={element.name} price={element.price} delivery={element.delivery} supplier={element.supplier} supplierLink={element.supplierLink} img={element.img} addToCart={addToCart}/>
          )}
        </div>
      </main>
    )
  }
  
 