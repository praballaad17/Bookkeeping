import React, { useEffect } from "react";
import { useGST } from "../../Context/gstContext";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import TopTab from "./TopTab";
import { GSTTABLE } from "../../constants/variables";
import { useUser } from "../../Context/userContext";

const TOPERHALFRATE = 200;
const TOPER = 100;
export default function Gstr3b() {
  const { user } = useUser();
  const { getGSTR3BFillingDetailsContext, gstr3bInvoice, date, fillingReport } =
    useGST();

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

  const handleFillStatement = () => {};

  return (
    <div>
      <Row className="border my-5">
        <TopTab title="GSTR-3B - Monthly Return" />
      </Row>
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
      <Row className="my-5">
        <Col>
          <Button
            disabled={fillingReport?.GSTR1?.isFilled}
            onClick={handleFillStatement}
            className="fs-4 px-5 py-2"
          >
            {!fillingReport?.GSTR1?.isFilled ? "Fill Statement" : "Filled"}
          </Button>
        </Col>
      </Row>
    </div>
  );
}
