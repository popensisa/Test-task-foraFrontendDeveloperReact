import React, {useState, useEffect} from 'react'
import Header from '../../components/shop/Header'
import { useDispatch, useSelector } from 'react-redux'
import './shop.scss'
import { ADD_ALLBRANDS, ADD_ALLDATA, ADD_ORDERS, SELECT_BRAND } from '../../store/storeConsts'
import Brands from '../../components/shop/Brands'
import Catalog from '../../components/shop/Catalog'
import Products from '../../assets/productslv3.json'
import Brand from '../../assets/brands.json'

const Shop = () => {
    const products = useSelector( store => store.products)
    const brands = useSelector( store => store.brands)
    const selectBrand = useSelector(store=> store.selectBrand)
    const orders = useSelector(store=> store.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: ADD_ALLDATA, payload: Products})
        dispatch({type: ADD_ALLBRANDS, payload: Brand})
    }, [])
    const size = [{
            id: 0,
            size: 'M'
        },
        {
            id: 1,
            size: 'L'
        }
    ]
    const [activeItem, setActiveItem] = useState(1)

    const color = [{
            id: 0,
            color: 'black'
        },
        {
            id: 1,
            color: 'red'
        },
        {
            id: 2,
            color: 'blue'
        },
    ]
    const [activeColor, setActiveColor] = useState(2)
    
    const selectBrandClicker = (brand) => {
        dispatch({type: SELECT_BRAND, payload: brand})
    }
    const addOrder = (product) => {
        if(product.variants){
            const selectOrder = {...product, size: size[activeItem], color: color[activeColor]}
            dispatch({type: ADD_ORDERS, 
                payload: selectOrder
            })
        }else{
            dispatch({type: ADD_ORDERS, 
                payload: product
            })
        }
    }
    return(
        <div className='shop-page'>
            <div className='container'>
                <Header orders={orders}/>
                <div className='line'></div>
                <div className='shop-page-content'>
                    <Brands brands={brands} selectBrand={selectBrand} selectBrandClicker={selectBrandClicker}/>
                    <Catalog 
                        products={products} 
                        selectBrand={selectBrand} 
                        addOrder={addOrder}
                        color={color}
                        size={size}
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        activeColor={activeColor}
                        setActiveColor={setActiveColor}
                        />
                </div>
            </div>
        </div>
    )
}

export default Shop