import React from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

interface ITrailerModal {
  details: any,
  show: boolean,
  handleShow: () => void,
  handleClose: () => void,
}

const TrailerModal = (props: ITrailerModal) => {
  return (
    <Modal size="lg" show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={12}>
              (<iframe src={`https://www.youtube.com/embed/${props.details.videos.results[0].key}`}
                title={props.details.videos.results[0].key}
                className="w-100"
                height="400px"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
              </iframe>
            </Col>
          </Row>

          <Row className="justify-content-end">
            <Col md={6} className="d-flex justify-content-end">
              <Button variant="secondary" className="px-5" onClick={props.handleClose}>Close</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default TrailerModal;