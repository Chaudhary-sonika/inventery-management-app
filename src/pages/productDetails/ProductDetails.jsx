import { useParams } from "react-router"
import { inventoryData } from "../../backend/InventoryData";
import "../productDetails/ProductDetails.css";
export const ProductDetails = ()=>{
    const {productId} = useParams();
    
    const filteredData = [...inventoryData].filter((prod)=>prod.id===parseInt(productId));
     
    return(
        <div>
            <h3 className="prod_head">Product Details</h3>
            <div>
                {filteredData.map((item)=>(
                 <div className="prod_card_div">
                    <h3>{item.name}:-</h3>
                    <img className="image_tag" src={item.imageUrl} alt="ProductImage"/>
                    <p>Price: {item.price}</p>
                    <p>Stock: {item.stock}</p>
                    <p>Supplier:{item.supplier}</p>
                    <p>Department:{item.department}</p>
                    <p>SKU: {item.sku}</p>
                    <p>Delivered: {item.delivered}</p>
                    <p>Description: {item.description}</p>
                 </div>
               ))}
                
            </div>
        </div>
    )
}