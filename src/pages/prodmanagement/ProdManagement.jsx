import "../prodmanagement/ProdManagement.css";
export const ProdManagement =()=>{
    return(
        <div>
            <h3>Add New Product</h3>
            <form className="form_tag">
                <label>Department: <input/></label>
                <label>Name: <input/></label>
                <label>Description: <input/></label>
                <label>Price: <input/></label>
                <label>Stock: <input/></label>
                <label>SKU: <input/></label>
                <label>Supplier: <input/></label>
                <label>Delivered: <input/></label>
                <label>Image URL: <input/></label>
                <button>Add Product</button>
            </form>
        </div>
    )
}