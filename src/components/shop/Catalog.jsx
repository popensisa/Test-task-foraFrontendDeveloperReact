import React, { useState } from 'react'
import ItemsForBrands from './list/ItemsForBrands'
import ItemsList from './list/ItemsList'

const Catalog = ({ 
    products, selectBrand, addOrder, 
    color, size, activeItem, 
    setActiveItem, activeColor, setActiveColor 
    }) => {

    return(
        <div className='shop-page-content-catalog'>
        <h1>Catalog</h1>
        <div className='shop-page-content-catalog-grid'>
            {
                selectBrand?.id
                ?
                products
                    .filter(product => product.brand == selectBrand.id)
                    .map(product => 
                        product.variants 
                        ? 
                            <ItemsForBrands 
                                key={product.id}
                                product={product} 
                                color={color} 
                                size={size} 
                                activeColor={activeColor} 
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                setActiveColor={setActiveColor}
                                addOrder={addOrder}
                            />
                        :
                            <ItemsList key={product.id} product={product} addOrder={addOrder}/>
                    )
                :
                products.map(product => 
                    product.variants
                    ?
                        <ItemsForBrands 
                            key={product.id}
                            product={product} 
                            color={color} 
                            size={size} 
                            activeColor={activeColor} 
                            activeItem={activeItem}
                            setActiveItem={setActiveItem}
                            setActiveColor={setActiveColor}
                            addOrder={addOrder}
                        />
                    :
                        <ItemsList key={product.id} addOrder={addOrder} product={product}/>
                )
            }
        </div>
        </div>
    )
}

export default Catalog