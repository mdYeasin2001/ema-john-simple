import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImg from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderCompleted, setOrderCompleted] = useState(false);
    const history = useHistory();
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => key === pd.key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);
    const removeItem = (productKey) => {
        // console.log(productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    const proceedCheckout = () => {
        history.push('/shipment')
    }
    let happyClient;
    if(orderCompleted){
        happyClient = <img src={happyImg} alt=""/>
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {cart.map(product => <ReviewItem removeItem={removeItem} key={product.key} product={product} />)}
                {happyClient}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={proceedCheckout} className="shopping-btn">Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;