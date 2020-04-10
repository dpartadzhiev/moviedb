import React from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

interface ITransitionsModal {
  translations: any,
  show: boolean,
  handleShow: () => void,
  handleClose: () => void,
}

const TranslationsModal = (props: ITransitionsModal) => {
  return (
    <Modal size="lg" show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <Container>
          <Row>
            <div className="px-5 py-5 font-weight-bold">
              {
                props.translations.map((translation: any, id: number) => (
                  <div key={id}>
                    <p>{translation.english_name}/{translation.name}</p>
                    <p>{translation.data.overview}</p>
                    <br />
                  </div>
                ))
              }
            </div>
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

export default TranslationsModal;