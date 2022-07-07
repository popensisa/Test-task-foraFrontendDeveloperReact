import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'

const CartList = ({orders, addOrder, removeOrder, deleteOrder}) => {

    function summArrayElements(arr){
        let x = 0;
        return arr.map(i => x += i.total, x).reverse()[0]
    }

    return(
        <div className='basket-page-cart'>
            <h1 className='title'>Shopping Cart</h1>
            {
                orders.length
                ?
                    <div className='d-flex flex-column align-items-center'>
                        <div className='basket-page-cart-item'>
                            {orders.map(item =>    
                                <Card style={{ width: '18rem' }} className='m-2' key={item.variants ? item.idDel : item.id}>
                                <Card.Img variant="top" src={require(`../../assets${item.image}`)} alt='Item img' />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Title>Brand {item.brand}</Card.Title>
                                    {item.size &&
                                        <>
                                            <span>
                                                Size: {item.size.size} 
                                            </span>
                                            <div className='d-flex align-items-center'>
                                                    <span>Color: {item.color.color}</span>
                                                    <div style={{backgroundColor: `${item.color.color}`, width: '15px', height: '15px'}}></div>
                                            </div>
                                        </>
                                    }
                                </Card.Body>
                                <ListGroup className="list-group-flush"/>
                                <Card.Body>
                                    <Card.Title>Price: {item.regular_price.value} {item.regular_price.currency}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush"/>
                                <Card.Body className='d-flex flex-row align-items-center'>
                                    <Button className='mr-4' onClick={() => addOrder(item)} variant="secondary">+</Button>{' '}
                                    <Card.Title className='m-2'>{item.count}</Card.Title>
                                    <Button onClick={() => removeOrder(item)} variant="secondary">-</Button>{' '}
                                </Card.Body>
                                <ListGroup className="list-group-flush"/>
                                <Card.Body className='d-flex justify-content-between align-items-center'>
                                    <Card.Title>Total: ${item.total.toFixed(2)}</Card.Title>
                                    <Button variant='secondary' onClick={() => deleteOrder(item)}>Delete</Button>
                                </Card.Body>
                                </Card>
                            )}
                        </div>
                        <Card className='d-flex flex-row align-items-center m-4'>
                            <Card.Title className='m-2'>Totally: ${summArrayElements(orders).toFixed(2)}</Card.Title>
                            <Button variant="primary" size="lg" className='font-weight-bold m-4 p-3'>
                                CHECKOUT
                            </Button>
                        </Card>
                    </div>
                :
                    <div className='basket-page-cart-nores'>
                        Add products
                    </div>
            }
        </div>
    )
}

export default CartList