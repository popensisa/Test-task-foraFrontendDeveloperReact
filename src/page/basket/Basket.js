import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartList from '../../components/cart/CartList'
import Logo from '../../components/Logo'
import { ADD_ORDERS, DELETE_ORDER, REMOVE_ORDERS } from '../../store/storeConsts'
import 'bootstrap/dist/css/bootstrap.min.css';
import './basket.scss'

const Basket = () => {
    const orders = useSelector(store => store.orders)
    const dispatch = useDispatch()
    const addOrder = (order) => {
        dispatch({type: ADD_ORDERS, payload: order})
    }
    const removeOrder = (order) => {
        dispatch({type: REMOVE_ORDERS, payload: order})
    }
    const deleteOrder = (order) => {
        dispatch({type: DELETE_ORDER, payload: order})
    }
    return(
        <div className='basket-page'>
            <div className='container'>
                <Logo/>
                <CartList orders={orders} deleteOrder={deleteOrder} addOrder={addOrder} removeOrder={removeOrder}/>
            </div>
        </div>
    )
}

export default Basket