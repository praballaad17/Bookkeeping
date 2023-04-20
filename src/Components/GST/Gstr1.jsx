import React, { useEffect, useState } from "react";
import { useGST } from "../../Context/gstContext";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { RATETABLE, REPORTTYPE } from "../../constants/variables";
import TopTab from "./TopTab";
import { useUser } from "../../Context/userContext";
import { postFillingDetails } from "../../services/gstServices";
import Gstr1Tabs from "./Gstr1Tabs";

const TOPERHALFRATE = 200;
const TOPER = 100;
export default function Gstr1() {
  const {
    gstr1Invoice,
    getTaxRateTable,
    rateTable,
    date,
    fillingReport,
    getGSTR1FillingDetailsContext,
  } = useGST();
  const { user, addToast } = useUser();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!fillingReport?.GSTR1 && date.monthFinancialYear) {
      const res = getGSTR1FillingDetailsContext(
        user.id,
        date.monthFinancialYear,
        date.start,
        date.end
      );
    } else {
      // if (date.start) {
      //   getGSTR1Invoice();
      // }
    }
  }, [date]);

  const handleFillStatement = async () => {
    let set = new Set();
    gstr1Invoice.map((item) => {
      set.add(item._id);
    });
    const fillObj = {
      invoices: [...set],
      reportType: REPORTTYPE.GSTR1,
      monthFinancialYear: date.monthFinancialYear,
    };
    try {
      const res = await postFillingDetails(user.id, fillObj);
      console.log(res);
    } catch (error) {
      addToast("Error To Fill", true);
      console.log(error);
    }
  };

  return (
    <>
      <Row className="border my-5">
        <TopTab title="GSTR-1 - Details of outward supplies of goods or services" />
      </Row>
      <Row>
        <Gstr1Tabs />
      </Row>
      <Row>
        <Col sm={2}>
          {gstr1Invoice.length ? (
            <Button
              className="fs-4 px-5 py-2"
              onClick={() => {
                setOpen(!open);
                getTaxRateTable();
              }}
            >
              Get Rate Table
            </Button>
          ) : (
            <></>
          )}
        </Col>
        <Col sm={10}>
          {open ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  {RATETABLE.map((item, i) => (
                    <th key={i}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rateTable.map((item, i) => (
                  <tr key={i}>
                    <td>{item.rate}</td>
                    <td>{item.taxable}</td>
                    <td>
                      {(parseFloat(item.taxable) * parseInt(item.rate)) /
                        TOPERHALFRATE}
                    </td>
                    <td>
                      {(parseFloat(item.taxable) * parseInt(item.rate)) /
                        TOPERHALFRATE}
                    </td>
                    <td>0</td>
                    <td>
                      {item.taxable +
                        (parseFloat(item.taxable) * parseInt(item.rate)) /
                          TOPER}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <></>
          )}
        </Col>
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
    </>
  );
}
