import { createContext, useContext, useReducer } from "react";
import { inventoryData } from "../backend/InventoryData";
import { DataReducer } from "../reducer/DataReducer";
const DataContext = createContext(null);
export const DataProvider = ({children})=>{
    const initialState = {Data:[...inventoryData]}
    const [dataState, dispatch] = useReducer(DataReducer, initialState)
    const TotalStock = [...inventoryData].reduce((acc, curr)=>acc+curr.stock, 0)
    const TotalDelivered = [...inventoryData].reduce((acc, curr)=>acc+curr.delivered, 0)
    const LowStock = [...inventoryData].reduce((acc, curr)=>{curr.stock <=10?acc.lowstock+=1:acc.stock+=1; 
        return acc;}, {lowstock:0, stock:0})
        console.log(LowStock);
    return(
        <DataContext.Provider value={{TotalStock, TotalDelivered, LowStock, dataState, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}
export const useData =()=>useContext(DataContext);