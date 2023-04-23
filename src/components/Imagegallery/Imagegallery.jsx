import PropTypes from 'prop-types';
import { StyledList } from './Imagegallery.styled';
import { ImageGalleryItem } from './ImagegalleryItem';

export const ImageGallery = ({ pictures, openModal }) => {
  return (
    <StyledList>
      {pictures.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          card={picture}
          openModal={openModal}
        />
      ))}
    </StyledList>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  openModal: PropTypes.func,
};
