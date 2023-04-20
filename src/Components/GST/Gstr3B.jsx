import React, { useEffect, useState } from "react";
import { useGST } from "../../Context/gstContext";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import TopTab from "./TopTab";
import { GSTTABLE, REPORTTYPE } from "../../constants/variables";
import { useUser } from "../../Context/userContext";
import { postFillingDetails } from "../../services/gstServices";

const TOPERHALFRATE = 200;
const TOPER = 100;
export default function Gstr3b() {
  const { user, addToast } = useUser();
  const { getGSTR3BFillingDetailsContext, gstr3bInvoice, date, fillingReport } =
    useGST();

  const [nill, setNill] = useState(false);
  const [alertsucc, setAlert] = useState(false);

  useEffect(() => {
    if (!fillingReport?.GSTR3B && date.monthFinancialYear) {
      const res = getGSTR3BFillingDetailsContext(
        user.id,
        date.monthFinancialYear,
        date.start,
        date.end
      );
    }
  }, [date]);

  const handleFillStatement = async () => {
    let fillObj = {};
    if (nill) {
      fillObj = {
        invoices: [],
        reportType: REPORTTYPE.GSTR3B,
        monthFinancialYear: date.monthFinancialYear,
      };
    } else {
      let set = new Set();
      gstr3bInvoice.map((item) => {
        set.add(item._id);
      });
      fillObj = {
        invoices: [...set],
        reportType: REPORTTYPE.GSTR3B,
        monthFinancialYear: date.monthFinancialYear,
      };
    }

    try {
      const res = await postFillingDetails(user.id, fillObj);
      console.log(res);
      setAlert(true);
    } catch (error) {
      addToast("Error To Fill", true);
      console.log(error);
    }
  };

  return (
    <div>
      <Row className="border my-5">
        <TopTab title="GSTR-3B - Monthly Return" />
      </Row>
      {alertsucc ? (
        <Row className="my-4">
          <Alert variant={"success"}>GSTR-3B Filled SuccessFully</Alert>
        </Row>
      ) : (
        <></>
      )}
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              {GSTTABLE.map((item) => (
                <th className="text-center">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gstr3bInvoice.length ? (
              gstr3bInvoice.map((invoice, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td className="text-center">
                    {invoice.party?.gstin?.length ? invoice.party.gstin : "URD"}
                  </td>
                  <td>{invoice.party.name}</td>
                  <td className="text-center">{invoice.invoiceNumber}</td>
                  <td>{invoice.date}</td>
                  <td className="text-right">{invoice.rate} %</td>
                  <td>{invoice.salePrice * invoice.unit}</td>
                  <td>
                    {(parseFloat(invoice.salePrice) *
                      parseInt(invoice.unit) *
                      parseInt(invoice.rate)) /
                      TOPERHALFRATE}
                  </td>
                  <td>
                    {(parseFloat(invoice.salePrice) *
                      parseInt(invoice.unit) *
                      parseInt(invoice.rate)) /
                      TOPERHALFRATE}
                  </td>
                  <td>0</td>
                  <td className="text-right">
                    ₹
                    {invoice.salePrice * invoice.unit +
                      (parseFloat(invoice.salePrice) *
                        parseInt(invoice.unit) *
                        parseInt(invoice.rate)) /
                        TOPER}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center py-5" colSpan={11}>
                  No Invoice Found To Fill in this time period.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>

      {gstr3bInvoice.length === 0 ? (
        <Row>
          <Col>
            <Form.Check
              aria-label="option 1"
              label="Fill Nill GSTR-3B"
              onChange={() => setNill(!nill)}
              checked={fillingReport?.GSTR3B?.isFilled && !gstr3bInvoice.length}
              disabled={fillingReport?.GSTR3B?.isFilled}
            />
          </Col>
        </Row>
      ) : (
        <></>
      )}
      <Row className="my-5">
        <Col>
          <Button
            disabled={fillingReport?.GSTR3B?.isFilled}
            onClick={handleFillStatement}
            className="fs-4 px-5 py-2"
          >
            {!fillingReport?.GSTR3B?.isFilled ? "Fill Statement" : "Filled"}
          </Button>
        </Col>
      </Row>
    </div>
  );
}
