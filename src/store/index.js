import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { basketReducer } from "./basketReducer";
import { brandReducer, selectBrandReducer } from "./brandReducer";
import { productReducer } from "./productReducer";


const rootReducer = combineReducers({
    products: productReducer,
    brands: brandReducer,
    selectBrand: selectBrandReducer,
    orders: basketReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))