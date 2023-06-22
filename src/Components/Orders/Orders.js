import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../Review Container/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {
    const orders = useLoaderData();
    const { initialCart } = orders;
    const [cart, setCart] = useState(initialCart);
    const handleReviewItem = (id) =>
    {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id);
        }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="order-container my-20">
                {
                    cart.map(product=> <ReviewItem key={product.id} product={product} handleReviewItem={handleReviewItem}></ReviewItem>)
                }
                {
                    cart.length===0&&<h2>No Items for review.Please <Link to={'/'}>Shop More</Link> </h2>
                }

            </div>
            <div className="cart-container my-20">

                <Cart clearCart={clearCart} cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Orders;