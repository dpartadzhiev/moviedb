import React from 'react';
import { Form, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import IMovie from '../../interfaces/IMovie.interface';

interface ICommentModal {
  movie: IMovie,
  show: boolean,
  handleShow: () => void,
  handleClose: () => void,
}

const CommentModal = (props: ICommentModal) => {
  return (
    <Modal size="lg" show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={3}>
              <img src={`http://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} alt="" />
            </Col>

            <Col md={9}>
              <h5 className="font-weight-bold"> {props.movie.original_title} ( {props.movie.release_date} ) </h5>
              <p className=""><span className="font-weight-bold">Rating: </span>{props.movie.vote_average}/10</p>
              <p className=""><span className="font-weight-bold">Plot: </span> {props.movie.overview} </p>
              <p className=""><span className="font-weight-bold">Director:</span></p>
              <p className=""><span className="font-weight-bold">Stars:</span></p>
            </Col>
          </Row>

          <Row className="justify-content-end">
            <Col md={9}>
              <Form>
                <Form.Group>
                  <Form.Label>Write a review</Form.Label>
                  <Form.Control as="textarea" rows="9" />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row className="justify-content-end">
            <Col md={6} className="d-flex justify-content-end">
              <Button variant="primary" className="px-5 mr-3" onClick={props.handleClose}>Submit</Button>
              <Button variant="secondary" className="btn-lg px-5" onClick={props.handleClose}>Close</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default CommentModal;