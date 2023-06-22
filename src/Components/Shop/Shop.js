import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Shop = () => {
    // const [products, setProducts] = useState([]);

    const products = useLoaderData();
    const [cart, setCart] = useState([]);
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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
            <div className="cart-container invisible md:visible">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link className='reviewProducts' to={'orders'}> <button >Review Products</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;