import { useEffect } from 'react';
import { StyledOverlay, StyledModal } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ poster, onClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = ev => {
    if (ev.key === 'Escape' || ev.target === ev.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledOverlay onClick={handleKeyDown}>
      <StyledModal>
        <img src={poster} alt="pic" />
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  poster: PropTypes.string,
};
