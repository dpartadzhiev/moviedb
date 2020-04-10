import React, { useState } from "react";

import Paragraph from "./MovirCardComponents/Paragraph";
import CommentModal from "./modals/CommentModal";
import TrailerModal from "./modals/TrailerModal";
import TranslationsModal from "./modals/TranslationsModal";

import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay, faInfoCircle, faEllipsisV, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import useModalState from "../hooks/useModalState";
import IMovie from '../interfaces/IMovie.interface';
import fetchTrailer from '../services/fetchTrailer';
import fetchTransitions from '../services/fetchTransitions';


const MovieCard = (props: { movie: IMovie }) => {
  const { movie } = props;

  const {
    show: showCommentModal,
    handleShow: handleShowCommentModal,
    handleClose: handleCloseCommentModal
  } = useModalState();

  const {
    show: showTrailerModal,
    handleShow: handleShowTrailerModal,
    handleClose: handleCloseTrailerModal
  } = useModalState();

  const {
    show: showTranslationsModal,
    handleShow: handleShowTranslationsModal,
    handleClose: handleCloseTranslationsModal
  } = useModalState();

  const [details, setDetails] = useState({});
  const [translations, setTranslations] = useState();

  return (
    <>
      <Card className="mt-3 mb-3">
        <Row className="no-gutters">
          <Col sm={12} md={2}>
            <img
              className="px-3 py-3"
              src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt=""
            />
          </Col>

          <Col sm={12} md={8}>
            <Card.Body>
              <Card.Title className="font-weight-bold"> {movie.original_title} ({movie.release_date}) </Card.Title>

              <Paragraph {...{ title: "Rating:", content: movie.vote_average + "/10" }} />
              <Paragraph {...{ title: "Plot:", content: movie.overview }} />
              <Paragraph {...{ title: "Director:", content: "" }} />
              <Paragraph {...{ title: "Stars:", content: "" }} />

              <Button variant="secondary">
                <FontAwesomeIcon icon={faHeart} />
                <span className="pl-2">Add to favorites</span>
              </Button>

              <Button
                variant="secondary"
                className="ml-2"
                onClick={() => {
                  fetchTrailer(movie.id).then(movieDetails => {
                    setDetails(movieDetails);
                    handleShowTrailerModal();
                  });
                }}
              >
                <FontAwesomeIcon icon={faPlay} />
                <span className="pl-2">Watch Trailer</span>
              </Button>

              <Button
                variant="secondary"
                className="ml-2"
                onClick={() => {
                  fetchTransitions(movie.id).then(translations => {
                    setTranslations(translations.translations);
                    handleShowTranslationsModal();
                  });
                }}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                <span className="pl-2">View Translations</span>
              </Button>
            </Card.Body>
          </Col>

          <Col sm={12} md={2}>
            <Row>
              <Col md={12} className="d-flex justify-content-end pt-5 pr-5">
                <FontAwesomeIcon icon={faEllipsisV} />
              </Col>

              <Col
                md={12}
                className="d-flex justify-content-end pt-1 pr-5 ml-sm-4"
              >
                <Button
                  variant="secondary"
                  className="mt-3 w-100 mb-sm-2"
                  onClick={handleShowCommentModal}
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                  <span className="pl-2">Add Review</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>

      {showCommentModal &&
        CommentModal({
          movie: { ...movie },
          show: showCommentModal,
          handleShow: handleShowCommentModal,
          handleClose: handleCloseCommentModal
        })}

      {showTrailerModal &&
        TrailerModal({
          details: { ...details },
          show: showTrailerModal,
          handleShow: handleShowTrailerModal,
          handleClose: handleCloseTrailerModal
        })}

      {showTranslationsModal &&
        TranslationsModal({
          translations: translations,
          show: showTranslationsModal,
          handleShow: handleShowTranslationsModal,
          handleClose: handleCloseTranslationsModal
        })}
    </>
  );
};

export default MovieCard;