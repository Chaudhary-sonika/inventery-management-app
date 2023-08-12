import { useNavigate } from "react-router";
import { useData } from "../../contexts/DataContext";
import "../department/Department.css";
export const Department = ()=>{
    const {dispatch} = useData();
    const navigate = useNavigate();
    return(
        <div className="department_div"> 
           <div className="card_div" onClick={()=>{dispatch({type:"department_cat", payload:"Kitchen"}); navigate("/product"); }}>
            <h3>Kitchen</h3>
           </div>
           <div className="card_div" onClick={()=>{dispatch({type:"department_cat", payload:"Clothing"}); navigate("/product");}}>
            <h3>Clothing</h3>
           </div>
           <div className="card_div" onClick={()=>{dispatch({type:"department_cat", payload:"Toys"}); navigate("/product");}}>
            <h3>Toys</h3>
           </div>
        </div>
    )
}