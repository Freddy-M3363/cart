import React, { useState, useEffect } from 'react';
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

const ProductList = ({ imagePaths }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = await Promise.all(
                imagePaths.map(async (path) => {
                    const module = await import(path);
                    return module.default;
                })
            );
            setImages(loadedImages);
        };

        loadImages();
    }, [imagePaths]);

    const products = [
      {description:"tissue double layer roll", alt:"phone illusion isn't available ", price:"Ksh 300", previous:" ksh 320"},
      {description:"tecno spark 8", alt:"phone illusion isn't available ", price:"Ksh 10 900", previous:" ksh 11 320"},
      {description:"tecno K56J", alt:"phone illusion isn't available ", price:"Ksh 12 200", previous:" ksh 13 330"},
      {description:"oppo a1s", alt:"phone illusion isn't available ", price:"Ksh 10 400", previous:" ksh 11 920"},
      {description:"oppo reno 7T", alt:"phone illusion isn't available ", price:"Ksh 34 000", previous:" ksh 32 000"},
      {description:"oppo a15k ", alt:"phone illusion isn't available ", price:"Ksh 31 000", previous:" ksh 32 000"},
      {description:"samsung a14", alt:"phone illusion isn't available ", price:"Ksh 30 000", previous:" kshh 32 000"},
      {description:"samsung galaxy 16y", alt:"phone illusion isn't available ", price:"Ksh 9 900", previous:" ksh 11 320"},
      {description:"samsung galaxy 16y", alt:"phone illusion isn't available ", price:"Ksh 13 300", previous:" ksh 13 720"},
      {description:"xiaomi 78t 6GB RAM 128GB ROM", alt:"phone illusion isn't available ", price:"Ksh 11 000", previous:" ksh 11 420"},
      {description:"feyond f7 4gb RAM 54GB ROM", alt:"phone illusion isn't available ", price:"Ksh 31 000", previous:" ksh 33 120"},
      {description:"Oppo A16k", alt:"phone illusion isn't available ", price:"Ksh 10 900", previous:" ksh 11 320"},
      {description:"Techno spark 8c", alt:"phone illusion isn't available ", price:"Ksh 16 000", previous:" ksh 320"} 
    ];

    return (
        <div>
            {products.map((product, index) => (
                <Product
                    key={index}
                    image={images[index]}
                    alt={`Product ${index + 1}`}
                    description={product.description}
                    price={product.price}
                    previous={product.previous}
                />
            ))}
        </div>
    );
}

export default ProductList;
