import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        <ImageGalleryItem image={image} key={index} />
      ))}
    </ul>
  );
};
export default ImageGallery;
