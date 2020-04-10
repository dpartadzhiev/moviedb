import { BASE_MOVIE_URL, API_KEY } from '../utils/endpoints';

const fetchTrailer = (movieId: number) => {
  return fetch(`${BASE_MOVIE_URL}${movieId}${API_KEY}&append_to_response=videos`)
    .then(secondResponse => {
      return secondResponse.json();
    })
}

export default fetchTrailer;