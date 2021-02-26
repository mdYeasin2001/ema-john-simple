import React from 'react';

const Cart = (props) => {
    // console.log(props.cart);
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    cart.map(pd => total = total + pd.price);
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.99;
    }else if(total > 0){
        shipping = 12.99;
    }
    let tax = total * 0.1;
    const formatNumber = (num) => {
        const precision = +num.toFixed(2);
        return precision;
    }
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Order: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + VAT : {formatNumber(tax)}</p>
            <p>Total Price: {formatNumber(total) + shipping + formatNumber(tax)}</p>
        </div>
    );
};

export default Cart;