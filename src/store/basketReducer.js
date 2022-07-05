import { ADD_ORDERS, DELETE_ORDER, REMOVE_ORDERS } from "./storeConsts"


const basketState = []

export const basketReducer = (state = basketState, action) => {
    switch(action.type){
        case ADD_ORDERS:
            const cart = [...state]
            const selectOrder = action.payload
            const count = 1
            const foundProduct = cart.find(item => item.id == selectOrder.id)
            // const foundProductColor = cart.find(item => item.color.color == selectOrder.color.color)
            // const foundProductSize = cart.find(item => item.size.size == selectOrder.size.size)
            // if(foundProductColor){
            //     const compairProduct = foundProductColor.color.color == foundProductSize.color.color && foundProductColor.size.size == foundProductSize.size.size
            //     console.log(compairProduct)
            //     // if(compairProduct){
            //     //     foundProduct.count += 1
            //     //     foundProduct.total = foundProduct.regular_price.value * foundProduct.count
            //     // }else{
            //     //     cart.push({
            //     //         ...selectOrder,
            //     //         count: count,
            //     //         total: selectOrder.regular_price.value
            //     //     })
            //     // }
            // }
            
            if(foundProduct){
                foundProduct.count += 1
                foundProduct.total = foundProduct.regular_price.value * foundProduct.count
            }else{
                cart.push({
                    ...selectOrder,
                    count: count,
                    total: selectOrder.regular_price.value
                })
            }
            return cart
        case REMOVE_ORDERS:
            const cartAll = [...state]
            const selectOrderToRemove = action.payload
            const foundOrder = cartAll.find(item => item.id == selectOrderToRemove.id)

            if(foundOrder.count != 0){
                foundOrder.count -= 1
                foundOrder.total = foundOrder.regular_price.value - foundOrder.count
            }
            if(foundOrder.count == 0){
                return cartAll.filter((item) => item.id !== selectOrderToRemove.id)
            }
            return cartAll
        case DELETE_ORDER:
            const cartOneForDelete = [...state]
            const selectOneOrderToRemove = action.payload
            return cartOneForDelete.filter(item => item.id != selectOneOrderToRemove.id)
        default:
            return state
    }
}