import React from 'react';
const ImageGalleryItem = ({ image }) => {
  return (
    <li>
      <img src={image.largeImageURL} alt="" />
    </li>
  );
};
export default ImageGalleryItem;
