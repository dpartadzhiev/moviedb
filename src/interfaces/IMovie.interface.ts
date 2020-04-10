interface IMovie {
  id: number,
  vote_average: number,
  release_date: string,
  original_title: string,
  genre_ids: number[],
  overview: string,
  poster_path: string
}

export default IMovie;