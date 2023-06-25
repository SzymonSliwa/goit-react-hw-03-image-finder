import propTypes from 'prop-types';
import React from 'react';

import { nanoid } from 'nanoid';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery, onClickImg }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(image => (
        <ImageGalleryItem
          key={nanoid()}
          id={gallery.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          gallery={image}
          onClickImg={onClickImg}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: propTypes.arrayOf(propTypes.object).isRequired,
  onClickImg: propTypes.func.isRequired,
};
