import React from 'react';
import { Form, Col } from 'react-bootstrap';
import ISearchForm from '../interfaces/ISearchForm.interface';

const SearchForm = (props: ISearchForm) => {
  return (
    <Col sm={12} md={3} className="mt-3">
      <Form className="search-form d-flex flex-column align-items-end w-100">
        <Form.Group>
          <Form.Control
            type="text"
            className="form-control text-right"
            id="keyword"
            placeholder="Search"
            value={props.keyword}
            onChange={props.handleChange}
          />
        </Form.Group>
      </Form>
    </Col>
  );
}

export default SearchForm;