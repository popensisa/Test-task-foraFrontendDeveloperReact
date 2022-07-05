import React from 'react'
import logo from '../../assets/images/logo.png'
import basket from '../../assets/images/basket.png'
import { NavLink } from 'react-router-dom'
import { BASKET } from '../routes/consts'


const Header = ({ orders }) => {

    function sumProducts(arr){
        let x = 0;
        return arr.map(i => x += i.count, x).reverse()[0]
    }
    const countOrders = sumProducts(orders)

    return(
        <div className="shop-page-header">
            <div className="shop-page-header-logo">
                <img src={logo} alt='Logo image'/>
            </div>
            <div className='shop-page-header-basket'>
                <NavLink to={BASKET}>
                <img src={basket} alt='Logo image'/>
                <div className='count'>{countOrders || '0'}</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header