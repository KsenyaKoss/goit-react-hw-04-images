import { useState, useEffect, useCallback } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './Imagegallery/Imagegallery';
import { serviceApi } from './services/ServiceApi';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListShown, setIsListShown] = useState(false);
  const [modalShown, setModalShown] = useState(null);
  const [error, setError] = useState('');
  const [totalHits, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const getImages = useCallback(() => {
    setIsLoading(true);
    serviceApi(page, query)
      .then(results => {
        setImages(prevState => [...prevState, ...results.data.hits]);
        setTotalHits(results.data.totalHits);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
        setIsListShown(true);
      });
  }, [page, query]);

  useEffect(
    (_, prevState) => {
      if (!query) {
        return;
      } else {
        getImages();
      }
    },
    [query, getImages]
  );

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleSubmit = query => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const openModal = largeImage => {
    setModalShown(largeImage);
  };

  const closeModal = () => {
    setModalShown(null);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {images.length !== 0 && (
        <ImageGallery pictures={images} openModal={openModal} />
      )}
      {isListShown && !isLoading && images.length < totalHits && (
        <Button onLoad={onLoadMore} />
      )}
      {modalShown !== null && (
        <Modal poster={modalShown} onClose={closeModal} />
      )}
    </>
  );
};
