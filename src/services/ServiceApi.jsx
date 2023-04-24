import axios from 'axios';
const API_KEY = '34776987-31260d6b6ec62d4f22854ea75';

export const serviceApi = (page, query) => {
  return axios(
    `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}&q=${query}}`
  );
};
