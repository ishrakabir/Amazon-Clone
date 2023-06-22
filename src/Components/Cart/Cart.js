import React from 'react';
import './Cart.css'
const Cart = ({ cart,clearCart,children }) => {
    let total = 0, shipping = 0;
    let item = 0;
    for (const product of cart)
    {
        total = (total + (product.price*product.quantity));
        shipping = shipping + product.shipping;
        item = item + product.quantity;
    }
    const tax = parseInt((total * .1).toFixed(2));
    return (
        <div className='cart'>
            <h1>This is Cart</h1>
            <p>Selected Items : {item}</p>
            <p>Total : ${ total}</p>
            <p  >Shipping : ${ shipping}</p>
            <p>Tax : ${tax}</p>
            <p>Grand Total : ${total + shipping + tax}</p>
            <div className='last-cart'>
                <button onClick={() => clearCart()}>Clear Cart</button>
                {children}
            </div>
            
        </div>
    );
};

export default Cart;