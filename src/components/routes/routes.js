import Basket from "../../page/basket/Basket";
import Shop from "../../page/shop/Shop";
import { BASKET, SHOP } from "./consts";


export const mainPages = [
    {
        path: SHOP,
        element: <Shop/>
    },
    {
        path: BASKET,
        element: <Basket/>
    }
]