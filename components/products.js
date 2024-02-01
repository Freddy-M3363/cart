import React from 'react';
import './products.css';

const Product = ({ image, alt, description, price, previous }) => {
    return (
        <div className='product-detail'>
            <div className='product-container'>
                <div className='image'>
                    <img src={image} alt={alt} />
                </div>
                <div className='description'>
                    <h2>{description}</h2>
                    <h3>Price: {price}</h3>
                    <h3>Previous Price: <strike>{previous}</strike></h3>
                </div>
            </div>
        </div>
    );
}

export default Product;
