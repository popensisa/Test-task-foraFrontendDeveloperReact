import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { SHOP } from './routes/consts'

const Logo = () => {

    return(
        <div className='basket-page-logo'>
            <NavLink to={SHOP}>
                <img src={logo} alt='Logo'/>
            </NavLink>
            <div className='line'></div>
        </div>
    )
}

export default Logo