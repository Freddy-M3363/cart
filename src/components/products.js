import React, {useState} from 'react';
import './styles/products.css';

const ImageCard = ({ src, description, price, alt, previous }) => {
   const[count, setCount]= useState(0); 
   const ADD = (e) =>{
    setCount(count++)
   }
    
  return (
    <div className="image-card">
        <div className="image">
             <img src={src} alt={alt} />   
        <div className='details'>
             <h3>{description}</h3>
             <p>Price: {price}</p>
             <p>previous: <s>{previous}</s></p>
             <button onClick={ADD}>ADD TO CART</button>

      </div>
    </div>
        </div>
        
  );
};

export default ImageCard;