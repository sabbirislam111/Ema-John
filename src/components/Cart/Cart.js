import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {carts, children}  = props;
    var total = 0;
    var shiping = 0;
    var quantity = 0;
    for(const product of carts){
        total = total + product.price * product.quantity;
        shiping += product.shipping;
        quantity += product.quantity;
    }
    var tax =  total * 5/100;
    var tax2 = tax.toFixed(2);
    var grandtotal = (total + shiping + parseFloat(tax2));
    return (
        <div className='cart'>
            <h1>Product Summery</h1>
            <p>Itemes: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping Charge: ${shiping} </p>
            <p>Tax: {tax2}</p>
            <p>Grand Total: {grandtotal}</p>
            {children}
        </div>
    );
};

export default Cart;