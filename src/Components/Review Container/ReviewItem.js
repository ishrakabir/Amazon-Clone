import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';
const ReviewItem = ({ product, handleReviewItem }) => {
    console.log(product);
    const { id, name, img, price, quantity, shipping } = product;

    return (
        <div className='review-item'>
            <img src={img} alt="" />

            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p>Price:{price}</p>
                    <p>Shipping :{shipping}</p>
                    <p>Quantity : {quantity}</p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleReviewItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;