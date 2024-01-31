

// GalleryContainer.js
import React from 'react';
import { importAllImages } from '../helpers/ImageHelper';
import ImageGallery from '../components/ImageGallery';

const images = importAllImages(require.context('../images', false, /\.(jpg)$/));

const GalleryContainer = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default GalleryContainer;
