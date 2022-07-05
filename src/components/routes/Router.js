import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from '../../page/shop/Shop'
import { mainPages } from './routes'

const Router = () => {

    return(
        <Routes>
            {mainPages.map(rout => 
                <Route key={rout.path} path={rout.path} element={rout.element}/>    
            )}
            <Route path='*' element={<Shop/>}/>
        </Routes>
    )
}

export default Router