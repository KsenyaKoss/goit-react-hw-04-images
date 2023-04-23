import { useEffect, useCallback } from 'react';
import { StyledOverlay, StyledModal } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ poster, onClose }) => {
  const handleKeyDown = useCallback(
    ev => {
      if (ev.key === 'Escape' || ev.target === ev.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

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
