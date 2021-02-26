import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    // console.log(products);

    const handleAddProduct = (product) => {
        // console.log("Product added", product);
        setCart([...cart, product])
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {products.map((product, i) => <Product handleAddProduct={handleAddProduct} key={i} product={product}/>)}
            </div>
            <div className="card-container">
                <Cart cart= {cart}/>
            </div>
        </div>
    );
};

export default Shop;