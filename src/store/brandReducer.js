import { ADD_ALLBRANDS, SELECT_BRAND } from "./storeConsts"


const defaultState = []

export const brandReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_ALLBRANDS:
            return action.payload
        default:
            return state
    }
}

const selectState = []

export const selectBrandReducer = (state = selectState, action) => {
    switch(action.type){
        case SELECT_BRAND:
            return action.payload
        default: 
            return state
    }
}