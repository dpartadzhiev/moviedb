import { BASE_SEARCH_URL, API_KEY } from '../utils/endpoints';

const fetchMovies = (keyword: string) => {
  return fetch(`${BASE_SEARCH_URL}${API_KEY}&query=${keyword}`)
    .then(response => {
      return response.json();
    })
};

export default fetchMovies;