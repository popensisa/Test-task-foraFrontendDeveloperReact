

const ItemsForBrands = ({ 
    product, addOrder, 
    color, size, activeItem, 
    setActiveItem, activeColor, setActiveColor 
    }) => {

    return(
        <>
            <div className='shop-page-content-catalog-grid-itemColumn'>
                <img src={require('../../../assets' + 
                product.image 
                )} alt='Фото товара'/>
                <h2>{product.title}</h2>
                <h3>Brand color {product.brand}</h3>
                <div className='sizes'>
                    {size.map(item => 
                        <button 
                            style={activeItem == item.id ? {border: '4px solid #ff9900'} : {}} 
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            >{item.size}</button>    
                    )}
                </div>
                <div className='color'>
                    {color.map(item => 
                        <button 
                            style={activeColor == item.id ? {border: '4px solid #ff9900', backgroundColor: `${item.color}`} : {backgroundColor: `${item.color}`}} 
                            key={item.id}
                            onClick={() => setActiveColor(item.id)}
                            ></button>    
                    )}
                </div>
                <div className='shop-page-content-catalog-grid-itemColumn-btn'>
                    <h3>{product.regular_price.value} {product.regular_price.currency}</h3>
                    <button onClick={() => addOrder(product)}>ORDER</button>
                </div>
            </div>
        </>
    )
}

export default ItemsForBrands