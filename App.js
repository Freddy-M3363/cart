import React from 'react';
import './App.css';
import Product from './components/products';
import A from './images/A.jpg';
import B from './images/B.jpg';
import C from './images/C.jpg';
import D from './images/D.jpg';
import E from './images/E.jpg';
import G from './images/G.jpg';
import I from './images/I.jpg';
import J from './images/J.gif';
import K from './images/K.jpg';
import L from './images/L.jpg';
import M from './images/M.jpg';
import N from './images/N.jpg';
import O from './images/O.jpg';




 const App = () => {


    const products = [
        {src:{A}, description:"tissue double layer roll", alt:"phone illusion isn't available ", price:"Ksh 300", previous:" ksh 320"},
        {src:{B}, description:"tecno spark 8", alt:"phone illusion isn't available ", price:"Ksh 10 900", previous:" ksh 11 320"},
        {src:{C}, description:"tecno K56J", alt:"phone illusion isn't available ", price:"Ksh 12 200", previous:" ksh 13 330"},
        {src:{D}, description:"oppo a1s", alt:"phone illusion isn't available ", price:"Ksh 10 400", previous:" ksh 11 920"},
        {src:{E}, description:"oppo reno 7T", alt:"phone illusion isn't available ", price:"Ksh 34 000", previous:" ksh 32 000"},
        {src:{G}, description:"oppo a15k ", alt:"phone illusion isn't available ", price:"Ksh 31 000", previous:" ksh 32 000"},
        {src:{I}, description:"samsung a14", alt:"phone illusion isn't available ", price:"Ksh 30 000", previous:" kshh 32 000"},
        {src:{J}, description:"samsung galaxy 16y", alt:"phone illusion isn't available ", price:"Ksh 9 900", previous:" ksh 11 320"},
        {src:{K}, description:"samsung galaxy 16y", alt:"phone illusion isn't available ", price:"Ksh 13 300", previous:" ksh 13 720"},
        {src:{L}, description:"xiaomi 78t 6GB RAM 128GB ROM", alt:"phone illusion isn't available ", price:"Ksh 11 000", previous:" ksh 11 420"},
        {src:{M}, description:"feyond f7 4gb RAM 54GB ROM", alt:"phone illusion isn't available ", price:"Ksh 31 000", previous:" ksh 33 120"},
        {src:{N}, description:"Oppo A16k", alt:"phone illusion isn't available ", price:"Ksh 10 900", previous:" ksh 11 320"},
        {src:{O}, description:"Techno spark 8c", alt:"phone illusion isn't available ", price:"Ksh 16 000", previous:" ksh 320"}
    
    ];
    
 

return(
       <div className='product-detail'>
      {products.map((product) => (
        <Product
          src={product.src}
          alt={product.alt}
          description={product.description}
          price={product.price}
          previous={product.previous}
        />
      ))}
    </div>
  )
}   

export default App;
