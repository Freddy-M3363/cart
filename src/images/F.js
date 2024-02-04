 // ImageGallery.js
import React from 'react';
import { importAllImages } from '../helpers/ImageHelper';

// Import all images from the 'images' folder
const images = importAllImages(require.context('../images', false, /\.(jpg)$/));

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image.default} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;

