import { useNavigate } from "react-router";
import { useData } from "../../contexts/DataContext";
import "../product/Product.css";
import { useState } from "react";
export const Product = ()=>{
    const {dataState, dispatch} = useData();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState();
    return(
        <div className="productpage_div">
            <div className="product_head_bar">
            <h2>Products</h2>
            <div>
                <select>
                    <option>All</option>
                    <option>Kitchen</option>
                    <option>Clothing</option>
                    <option>Toys</option>
                </select>
            </div>
            <div>
                <label><input type="checkbox" onChange={()=>dispatch({type:"low_sort"})}/>Low Stock Items</label>
            </div>
            <div>
            <select value={inputValue}
            onChange={(e) => {
              dispatch({ type: "option_filter", payload: e.target.value });
              setInputValue(e.target.value);
            }}>
                    <option value="name">name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                    
                </select>
            </div>
            <div>
                <button onClick={()=>navigate("/prodmanage")}>New</button>
            </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Supplier</th>
                        </tr>
                    </thead>
                    <tbody>
                     {dataState?.Data?.map((prod)=>(
                        <tr key={prod.id}>
                            <td onClick={()=>navigate(`/productdetails/${prod.id}`)}><img className="image_tag" src={prod?.imageUrl} alt="pic"/></td>
                            <td>{prod.name}</td> 
                            <td>{prod.description}</td>
                            <td>${prod.price}</td>
                            <td>{prod.stock}</td>
                            <td>{prod.supplier}</td>  
                        </tr>
                     ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}