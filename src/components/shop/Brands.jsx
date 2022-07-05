import React from 'react'

const Brands = ({brands, selectBrandClicker, selectBrand}) => {

    return(
        <div className='shop-page-content-brands'>
            <div className='shop-page-content-brands-column'>
                <h1 className='all-brands' onClick={() => selectBrandClicker([])}>All brands</h1>
                {brands.map((brand) => 
                    <div 
                        onClick={() => selectBrandClicker(brand)} 
                        className={
                            selectBrand.id === brand.id 
                                ? 'shop-page-content-brands-column-item active'
                                : 'shop-page-content-brands-column-item'
                            } 
                        key={brand.id}
                        >{brand.title}
                    </div>
                )}
            </div>
            <div className='line-after'></div>
        </div>
    )
}

export default Brands