
import { ItemsContent } from "../../data/productsData"
import Item from "./item"



export default function Items(props) {
    const addToCart = props.addToCart
    
    return (
      <main>
        <div className="">
          <Item />
        </div>
      </main>
    )
  }
  
 