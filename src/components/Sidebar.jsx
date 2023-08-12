import { NavLink, Outlet } from "react-router-dom";
import "../components/componentCss/Sidebar.css"
export const Sidebar = ()=>{
    return(
        <div className="sidebar_div">
            <div className="link_div">
              <NavLink to="/" className="navlink">Dashboard</NavLink>
              <NavLink to="/department" className="navlink">Department</NavLink>
              <NavLink to="/product" className="navlink">Product</NavLink>  
            </div>
            <div className="outlet_div">
              <Outlet/> 
            </div>
        </div>
    )
}