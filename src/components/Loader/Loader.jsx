import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <span>
      <ColorRing height="150" width="150" />
      Loading...
    </span>
  );
};
