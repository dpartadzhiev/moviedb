import React, { useState, useEffect } from "react";
import PageHeader from "./PageHeader";
import SearchForm from "./SearchForm";
import MovieCard from "./MovieCard";

import { Container } from "react-bootstrap";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import IMovies from "../interfaces/IMovies.interface";
import IMovie from "../interfaces/IMovie.interface";
import fetchMovies from "../services/fetchMovies";

let typingTimer: NodeJS.Timeout;

const Movies = () => {
  const [loader, setLoader] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [allMovies, setMovies] = useState([{}] as IMovie[]);

  const handleChange = (event: any) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    if (keyword) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        setLoader(true);
        fetchMovies(keyword).then((movies: IMovies) => {
          setMovies(movies.results);
          setLoader(false);
        });
      }, 1000);
    }
  }, [keyword]);

  return (
    <>
      <PageHeader>
        <SearchForm {...{ keyword, handleChange }} />
      </PageHeader>

      <Container>
        {loader && (
          <div className="d-flex justify-content-center">
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        )}

        {!loader &&
          allMovies.length - 1 &&
          allMovies.map((movie: IMovie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </Container>
    </>
  );
};

export default Movies;