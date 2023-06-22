import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = ({ product, addToCart }) => {
    // const { product, addToCart } = props;
    const { img, name, seller, price, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
            <p>{name}</p>
                <p>Price : ${price}</p>
            </div>
            <div className="product-down">
                <p>Manufacturer: {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button className='btn-style' onClick={() => addToCart(product)}>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product; 