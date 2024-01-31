import './App.css';
import React from'react';
import Product from './components/products';
import { AllIMages } from './helpers/imageshelpers';


const App = () => {
    const products = [
        {src:"images/feyond 9d.jpg", description:"tissue double layer roll", alt:"phone illusion isn't available ", price:"Ksh 300", previous:" ksh 320"},
        {src:"images/feyond,jpg", description:"tecno spark 8", alt:"phone illusion isn't available ", price:"Ksh 10 900", previous:" ksh 11 320"},
        {src:"images/grocery.jpg", description:"tecno K56J", alt:"phone illusion isn't available ", price:"Ksh 12 200", previous:" ksh 13 330"},
        {src:"images/infinix smart7.jpg", description:"oppo a1s", alt:"phone illusion isn't available ", price:"Ksh 10 400", previous:" ksh 11 920"},
        {src:"images/phone.gif", description:"oppo reno 7T", alt:"phone illusion isn't available ", price:"Ksh 34 000", previous:" ksh 32 000"},
        {src:"images/itel 4f.jpg", description:"oppo reno 8T", alt:"phone illusion isn't available ", price:"Ksh 10 900", previous:" ksh 11 320"},
        {src:"images/phone2.jpg", description:"oppo a15k ", alt:"phone illusion isn't available ", price:"Ksh 31 000", previous:" ksh 32 000"},
        {src:"images/phone.jpg", description:"oppo a16k", alt:"phone illusion isn't available ", price:"Ksh 10 900", previous:" ksh 17 200"},
        {src:"images/samsung a14.jpg", description:"samsung a14", alt:"phone illusion isn't available ", price:"Ksh 30 000", previous:" kshh 32 000"},
        {src:"images/redmi 12c.jpg", description:"samsung galaxy 16y", alt:"phone illusion isn't available ", price:"Ksh 9 900", previous:" ksh 11 320"},
        {src:"images/samsung a15.jpg", description:"samsung galaxy 16y", alt:"phone illusion isn't available ", price:"Ksh 13 300", previous:" ksh 13 720"},
        {src:"images/samsung 12c.jpg", description:"xiaomi 78t 6GB RAM 128GB ROM", alt:"phone illusion isn't available ", price:"Ksh 11 000", previous:" ksh 11 420"},
        {src:"images/samsung g2.jpg", description:"feyond f7 4gb RAM 54GB ROM", alt:"phone illusion isn't available ", price:"Ksh 31 000", previous:" ksh 33 120"},
        {src:"images/tecno spark 10.jpg", description:"Oppo A16k", alt:"phone illusion isn't available ", price:"Ksh 10 900", previous:" ksh 11 320"},
        {src:"images/tecno spark 6.jpg", description:"Techno spark 8c", alt:"phone illusion isn't available ", price:"Ksh 16 000", previous:" ksh 320"}
    
    ];


return(
  <div className='product-detail'>
        {products.map((photo, index) => (
        <Product
        
          key={index} 
          src={photo.src}
          alt={photo.alt}
          description={photo.description}
          price={photo.price}
          previous={photo.previous}
          
        />
      ))}
  </div>
);
}   

export default App;
