import React, {useState} from 'react';
import './styles/products.css';

const ImageCard = ({ src, description, price, alt, previous }) => {
   const[badge, setBadge]= useState(badge); 
   const Add = () =>{
       let count= document.getElementById('badge').value;
       count= setBadge(badge=>badge+1)
       return document.getElementById('badge').value = count; 

   }
   
    
  return (
    <div className="image-card">
        <div className="image">
             <img src={src} alt={alt} />   
        <div className='details'>
             <h3>{description}</h3>
             <p>Price: {price}</p>
             <p>previous: <s>{previous}</s></p>
             <button onClick={Add}>ADD TO CART</button>

      </div>
    </div>
        </div>
        
  );
};
export default ImageCard;