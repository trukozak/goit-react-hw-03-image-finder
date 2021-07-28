import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, bigSrc, onClick }) => {
  const onClickImg = () => {
    onClick(bigSrc);
  };
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={onClickImg}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  bigSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
