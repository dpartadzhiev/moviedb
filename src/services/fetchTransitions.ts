import { BASE_MOVIE_URL, API_KEY } from '../utils/endpoints';

const fetchTransitions = (movieId: number) => {
  return fetch(`${BASE_MOVIE_URL}${movieId}/translations${API_KEY}`)
    .then(thirdResponce => {
      return thirdResponce.json();
    })
}

export default fetchTransitions;