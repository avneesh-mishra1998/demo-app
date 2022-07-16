import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className="container nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row mt-5"></div>
            <Form>
              <Form.Group controlId="formGroupName">
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <br />
              <br />
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <br />
              <br />
              <Form.Group controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <br />
              <br />

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Example textarea"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
