import { useData } from "../../contexts/DataContext"
import "../dashboard/Dashboard.css";
export const Dashboard =()=>{
    const {TotalStock, TotalDelivered, LowStock} = useData();
    return(
        <div className="dashboard_div">
            <div className="dashboard_card">
                <h2 className="ts_head">{TotalStock}</h2>
                <h3>Total Stock</h3>
            </div>
            <div className="dashboard_card">
                <h2 className="td_head">{TotalDelivered}</h2>
                <h3>Total Delivered</h3>
            </div>
            <div className="dashboard_card">
            <h2 className="tdl_head">{LowStock?.lowstock}</h2>
                <h3>Low Stock Items</h3>
            </div>
        </div>
    )
}