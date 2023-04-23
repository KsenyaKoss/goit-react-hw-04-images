import PropTypes from 'prop-types';
import { StyledItem, StyledImg } from './Imagegallery.styled';

export const ImageGalleryItem = ({ card, openModal }) => {
  return (
    <StyledItem
      onClick={() => {
        openModal(card.largeImageURL);
      }}
    >
      <StyledImg src={card.webformatURL} alt="image" />
    </StyledItem>
  );
};

ImageGalleryItem.propTypes = {
  card: PropTypes.shape({
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
  }),
  openModal: PropTypes.func,
};
