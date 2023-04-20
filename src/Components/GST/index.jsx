import React, { useEffect, useState } from "react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FINANCIALYEAR, QUATERS, REPORTTYPE } from "../../constants/variables";
import { useGST } from "../../Context/gstContext";
import { useUser } from "../../Context/userContext";

export default function GstDashboard() {
  const [form, setForm] = useState({});
  const { user, addToast, setLoading } = useUser();
  const [open, setOpen] = useState(false);
  const { generateDate, fillingReport, getFillingDetailsContext } = useGST();
  const [MONTHS, setMonths] = useState([]);

  const handleForm = async (e) => {
    e.preventDefault();
    if (!form.year || !form.month || !form.quarter) {
      return addToast("Fill all the Fields", true);
    }
    setLoading(true);
    setOpen(true);
    const date = generateDate(form.year, form.month, form.quarter, {
      rtn_year: form.year,
      rtn_month: form.month,
      rtn_quarter: form.quarter,
    });
    localStorage.setItem("rtn_year", form.year);
    localStorage.setItem("rtn_month", form.month);
    localStorage.setItem("rtn_quarter", form.quarter);

    try {
      await getFillingDetailsContext(user.id, date.monthFinancialYear);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (form?.quarter === "1") {
      setMonths([
        { data: "April", code: "Apr" },
        { data: "May", code: "May" },
        { data: "June", code: "Jun" },
      ]);
    } else if (form?.quarter === "2") {
      setMonths([
        { data: "July", code: "Jul" },
        { data: "August", code: "Aug" },
        { data: "September", code: "Sep" },
      ]);
    } else if (form?.quarter === "3") {
      setMonths([
        { data: "October", code: "Oct" },
        { data: "November", code: "Nov" },
        { data: "December", code: "Dec" },
      ]);
    } else if (form?.quarter === "4") {
      setMonths([
        { data: "January", code: "Jan" },
        { data: "February", code: "Feb" },
        { data: "March", code: "Mar" },
      ]);
    }
  }, [form]);

  return (
    <>
      <Row>
        <h1 className="p-3 fs-2 fw-bold bg-info text-white">File Returns</h1>
      </Row>
      <Row>
        <Col className="fs-3">
          <Container className="w-50 border p-5 border-3">
            <Form className="fs-3 ">
              <Form.Group className="mb-3 fs-3">
                <Form.Label>Financial Year</Form.Label>
                <Form.Select
                  className="fs-3"
                  onChange={(e) => {
                    setForm({ ...form, year: e.target.value });
                  }}
                >
                  <option className="fs-3">select</option>
                  {FINANCIALYEAR.map((item) => (
                    <option key={item} className="fs-3" value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quarter</Form.Label>
                <Form.Select
                  className="fs-3"
                  onChange={(e) => {
                    setForm({ ...form, quarter: e.target.value });
                  }}
                >
                  <option>select</option>
                  {QUATERS.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.data}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Period</Form.Label>
                <Form.Select
                  className="fs-3"
                  onChange={(e) => {
                    setForm({ ...form, month: e.target.value });
                  }}
                >
                  <option>select</option>
                  {MONTHS.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.data}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Button
                className="fs-3"
                variant="primary"
                onClick={(e) => handleForm(e)}
              >
                Submit
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
      {open ? (
        <Row className="my-5 fs-3">
          <Col className="px-3">
            <Card className="w-75">
              <Card.Header>
                Details of outward supplies of goods or services
              </Card.Header>
              <Card.Body>
                <Card.Title>GSTR 1</Card.Title>
                <Card.Text>
                  {fillingReport[REPORTTYPE.GSTR1]?.isFilled
                    ? "Filled"
                    : "Not Filled"}
                </Card.Text>
                <Link to={ROUTES.GSTGSTR1}>
                  {" "}
                  <Button
                    className="fs-3"
                    variant={`${
                      fillingReport[REPORTTYPE.GSTR1]?.isFilled
                        ? "success"
                        : "primary"
                    }
                    }`}
                  >
                    {fillingReport[REPORTTYPE.GSTR1]?.isFilled
                      ? "Filled"
                      : "Not Filled"}
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="px-3">
            <Card className="w-75">
              <Card.Header>Monthly Return</Card.Header>
              <Card.Body>
                <Card.Title>GSTR 3B</Card.Title>
                <Card.Text>
                  {fillingReport[REPORTTYPE.GSTR3B]?.isFilled
                    ? "Filled"
                    : "Not Filled"}
                </Card.Text>
                <Link to={ROUTES.GSTGSTR3B}>
                  <Button
                    className="fs-3"
                    variant={`${
                      fillingReport[REPORTTYPE.GSTR3B]?.isFilled
                        ? "success"
                        : "primary"
                    }
                  }`}
                  >
                    {fillingReport[REPORTTYPE.GSTR3B]?.isFilled
                      ? "Filled"
                      : "Not Filled"}
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </>
  );
}
