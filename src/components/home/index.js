import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addData();
  };

  const addData = () => {
    let url = "http://localhost:4000/create";
    let headers = {
      "content-type": "application/json",
    };

    let params = {
      name: name,
      designation: designation,
    };
    axios.post(url, params, headers).then((response) => {
      console.log("rsp", response);
    });
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <Container>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Designation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="designation"
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button type="submit" variant="primary" size="lg">
                  Add
                </Button>
                <Button variant="danger" size="lg">
                  Cancel
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </div>
  );
}
