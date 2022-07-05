import { combineReducers, legacy_createStore as createStore } from "redux";
import { basketReducer } from "./basketReducer";
import { brandReducer, selectBrandReducer } from "./brandReducer";
import { productReducer } from "./productReducer";


const rootReducer = combineReducers({
    products: productReducer,
    brands: brandReducer,
    selectBrand: selectBrandReducer,
    orders: basketReducer
})

export const store = createStore(rootReducer)