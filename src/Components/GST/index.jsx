import React from "react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function GstDashboard() {
  return (
    <Row>
      <Col>
        <Link to={ROUTES.GSTGSTR3B}>
          <Button>GSTR 3B</Button>
        </Link>
        <Link to={ROUTES.GSTGSTR1}>
          <Button>GSTR 1</Button>
        </Link>
      </Col>
    </Row>
  );
}
