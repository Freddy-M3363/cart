import React, {useState} from 'react';
import './styles/products.css';

const ImageCard = ({ src, description, price, alt, previous }) => {
 const[items, setItems]= useState([]);

const AddToCart = (product)=>{
  setItems([...items, product]);
};
   
   
    
  return (
    <div className="image-card">
        <div className="image" AddToCart={AddToCart}>   
        <div className='details'>
             <h3>{description}</h3>
             <p>Price: {price}</p>
             <p>previous: <s>{previous}</s></p>
             <button onClick={AddToCart}>ADD TO CART</button>

      </div>
    </div>
        </div>
        
  );
};
export default ImageCard;

