import { ADD_ALLDATA, ADD_ORDERS, SELECT_BRAND } from "./storeConsts"


const defaultState = []

export const productReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_ALLDATA:
            return action.payload
        default:
            return state
    }
}

