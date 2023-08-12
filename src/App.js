import { Route, Routes } from "react-router";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Department } from "./pages/department/Department";
import { Product } from "./pages/product/Product";
import { ProductDetails } from "./pages/productDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Sidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/department" element={<Department />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/productdetails/:productId"
            element={<ProductDetails />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
