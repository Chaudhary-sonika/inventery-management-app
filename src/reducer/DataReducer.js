import { inventoryData } from "../backend/InventoryData";
export const DataReducer = (state, action) => {
  switch (action.type) {
    case "department_cat":
      return {
        ...state,
        Data: [...inventoryData].filter(
          (item) => item.department === action.payload
        ),
      };
    case "low_sort":
      return { ...state, Data: state.Data.sort((a, b) => b.stock - a.stock) };
    case "option_filter":
      return {
        ...state,
        Data: state.Data.sort((a, b) =>
          action.payload === "name"
            ? a.name - b.name
            : action.payload === "price"
            ? a.price - b.price
            : a.stock - b.stock
        ),
      };
    case "option_filter_dept":
      return {
        ...state,
        Data:
          action.payload === "all"
            ? [...inventoryData]
            : [...inventoryData].filter(
                (item) => item.department === action.payload
              ),
      };
    default:
      return state;
  }
};
