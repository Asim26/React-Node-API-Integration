import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditRecord() {
  const location = useLocation();
  let navigate = useNavigate();

  const [name, setName] = useState(location?.state?.name);
  const [designation, setDesignation] = useState(location?.state?.designation);

  const handleSubmit = (e) => {
    e.preventDefault();
    editData();
  };

  const editData = async () => {
    let id = location?.state?.id;
    let url = "http://localhost:4000/update/" + id;
    let headers = {
      "content-type": "application/json",
    };

    let params = {
      name: name,
      designation: designation,
    };
    axios.put(url, params, headers).then((response) => {
      console.log("rsp", response);
      navigate("/all-records");
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
                    setName(e?.target?.value);
                  }}
                  defaultValue={location?.state?.name}
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
                    setDesignation(e?.target?.value);
                  }}
                  defaultValue={location?.state?.designation}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button type="submit" variant="primary" size="lg">
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="lg"
                  onClick={() => {
                    navigate("/all-records");
                  }}
                >
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
