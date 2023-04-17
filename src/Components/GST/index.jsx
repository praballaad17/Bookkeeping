import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function GstDashboard() {
  return (
    <Row>
      <Col>
        <Button>GSTR 3B</Button>
        <Button>GSTR 1</Button>
      </Col>
    </Row>
  );
}
