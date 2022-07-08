import Products from '../assets/productslv3.json'
import Brand from '../assets/brands.json'
import { ADD_ALLBRANDS, ADD_ALLDATA } from '../store/storeConsts'

export const fetchProducts = () => {
    return dispatch => {
        setTimeout(() => {
                dispatch({type: ADD_ALLDATA, payload: Products})
                dispatch({type: ADD_ALLBRANDS, payload: Brand})
        }, 500)
    }
}