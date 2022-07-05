

const ItemsList = ({ product, addOrder }) => {

    return(
        <div key={product.id} className='shop-page-content-catalog-grid-itemColumn'>
            <img src={require('../../../assets' + product.image)} alt='Фото товара'/>
            <h2>{product.title}</h2>
            <h3>Brand {product.brand}</h3>
            <div className='shop-page-content-catalog-grid-itemColumn-btn'>
                <h3>{product.regular_price.value} {product.regular_price.currency}</h3>
                <button onClick={() => addOrder(product)}>ORDER</button>
            </div>
        </div>
    )
}

export default ItemsList