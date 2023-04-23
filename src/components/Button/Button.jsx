import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

export const Button = ({ onLoad }) => {
  return <LoadMoreButton onClick={onLoad}>Load more</LoadMoreButton>;
};

Button.propTypes = {
  onLoad: PropTypes.func,
};
