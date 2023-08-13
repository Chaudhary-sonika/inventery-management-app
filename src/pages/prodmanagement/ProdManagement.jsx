import "../prodmanagement/ProdManagement.css";
export const ProdManagement =()=>{
    return(
        <div>
            <h3>Add New Product</h3>
            <form className="form_tag">
                <label>Department: </label><input/>
                <label>Name: </label><input/>
                <label>Description: </label><input/>
                <label>Price: </label><input/>
                <label>Stock: </label><input/>
                <label>SKU: </label><input/>
                <label>Supplier: </label><input/>
                <label>Delivered: </label><input/>
                <label>Image URL: </label><input/>
                <button>Add Product</button>
            </form>
        </div>
    )
}