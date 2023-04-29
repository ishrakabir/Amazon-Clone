import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart=(product)=>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => {
                        if (product.img === 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52b5fde5829a4a04820dacf50127b969_9366/Adicolor_Classics_Primeblue_SST_Track_Pants_Blue_H06714_21_model.jpg')
                            return false
                           
                            return (
                                <Product key={product.id} product={product} addToCart={addToCart}></Product>
                            )
                        
                    })
                }
                
            </div>
            <div className="cart-container">
                {/* <h3>This is Ca  sdfasrt</h3>
                <p>Selected Items : {cart.length}</p> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;