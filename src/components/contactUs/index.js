import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ContactUs() {
  return (
    <div style={{ marginTop: "4%" }}>
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <div>
              <h1>Developed by @ Asim Mehmood</h1>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
}
