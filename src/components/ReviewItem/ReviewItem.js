import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div className="review-item">
            <h4>{name}</h4>
            <p><small>${price}</small></p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => props.removeItem(key)} className="shopping-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;