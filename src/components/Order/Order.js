import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart'
import OrderReview from '../OrderReview/OrderReview';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const {initialCart} = useLoaderData([]) //return {product, previousCart};
    console.log("initial",initialCart)
    const [cart, setCart] = useState(initialCart);
    
    const handelReMoveData = (id) => {
        const remainingData = cart.filter(products => products._id !== id);
        setCart(remainingData);
        removeFromDb(id);
    }

    return (
        <div>
              
        <div  className='shop_container'>
           <div className="prodect_order_container">
                {
                    cart.map(order_product => <OrderReview 
                        key={order_product._id}
                        product = {order_product}
                        hendelReMoveData={handelReMoveData}
                        ></OrderReview>)
                }
                 
           </div>
           <div className="order_container">
               <Cart carts = {cart}>
                 <Link to='/shipping'>
                    <button>proceed shipping</button>
                 </Link>
               </Cart>
            </div> 
        </div>
        </div>
    );
};

export default Order;