import React from 'react';
import './products.css';

const Product = (props)=> {
    const {src, alt, description, price, previous} = props;
 
    return(
        <div className='product-detail'>
            <div className='product-container'>
                <div>
                 <div className='image'>
                    <img src={src} alt={alt} />
                    
             </div>
             <div className='description'>
                 <h2>{description}</h2>
                 <h3>Price: {price}</h3>
                 <h3> Previous Price:<strike> npm s{previous}</strike></h3>
             </div>
             </div>
            </div> 


        </div>
    );
}

export default Product;