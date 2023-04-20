import React, { useEffect, useState } from "react";
import { useGST } from "../../Context/gstContext";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { RATETABLE, REPORTTYPE } from "../../constants/variables";
import TopTab from "./TopTab";
import { useUser } from "../../Context/userContext";
import { postFillingDetails } from "../../services/gstServices";
import Gstr1Tabs from "./Gstr1Tabs";
import VerifyModal from "./VerifyModal";
import { generateOtp } from "../../services/authenticationServices";

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
  const { user, addToast, setLoading } = useUser();
  const [open, setOpen] = useState(false);
  const [nill, setNill] = useState(false);
  const [alertsucc, setAlert] = useState(false);
  const [verify, setVerify] = useState(false);
  const [otpId, setOtpId] = useState();

  useEffect(() => {
    if (!fillingReport?.GSTR1 && date.monthFinancialYear) {
      const res = getGSTR1FillingDetailsContext(
        user.id,
        date.monthFinancialYear,
        date.start,
        date.end
      );
    }
  }, [date]);

  const handleFillStatement = async (otp, otpId) => {
    setLoading(true);
    let fillObj = {};
    if (nill) {
      fillObj = {
        invoices: [],
        reportType: REPORTTYPE.GSTR1,
        monthFinancialYear: date.monthFinancialYear,
      };
    } else {
      let set = new Set();
      gstr1Invoice.map((item) => {
        set.add(item._id);
      });
      fillObj = {
        invoices: [...set],
        reportType: REPORTTYPE.GSTR1,
        monthFinancialYear: date.monthFinancialYear,
      };
    }

    try {
      const res = await postFillingDetails(user.id, fillObj, otp, otpId);
      setLoading(false);
      setVerify(false);
      setAlert(true);
    } catch (error) {
      addToast("Error To Fill", true);
      console.log(error);
      setLoading(false);
      setVerify(false);
    }
  };

  const handleOtp = async () => {
    try {
      setLoading(true);
      const res = await generateOtp(user.id);
      setOtpId(res.otpId);
      setLoading(false);
      setVerify(true);
    } catch (error) {
      addToast("Error: Cannot genrate otp", true);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Row className="border mb-5">
        <TopTab
          title="GSTR-1 - Details of outward supplies of goods or services"
          status={fillingReport?.GSTR1?.isFilled}
        />
      </Row>
      {alertsucc ? (
        <Row className="my-4">
          <Alert variant={"success"}>GSTR-1 Filled SuccessFully</Alert>
        </Row>
      ) : (
        <></>
      )}
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

      {gstr1Invoice.length === 0 ? (
        <Row>
          <Row>
            <Col>
              <Form.Check
                aria-label="option 1"
                label="Fill Nill GSTR-1"
                onChange={() => setNill(!nill)}
                checked={fillingReport?.GSTR1?.isFilled && !gstr1Invoice.length}
                disabled={fillingReport?.GSTR1?.isFilled}
              />
            </Col>
          </Row>
          {nill || (fillingReport?.GSTR1?.isFilled && !gstr1Invoice.length) ? (
            <Row className="border py-4 px-2 my-3">
              <div>Note: NIL Form GSTR-1 can be filed by you if you have:</div>
              <div className="mx-4">
                a. No Outward Supplies (including supplies on which tax is to be
                charged on reverse charge basis, zero rated supplies and deemed
                exports) during the month or quarter for which the form is being
                filed for
              </div>
              <div className="mx-4">
                b. No Amendments to be made to any of the supplies declared in
                an earlier form
              </div>
              <div className="mx-4">
                c. No Credit or Debit Notes to be declared / amended
              </div>
              <div className="mx-4">
                d. No details of advances received for services is to be
                declared or adjusted
              </div>
            </Row>
          ) : (
            <></>
          )}
        </Row>
      ) : (
        <></>
      )}
      <Row className="my-5">
        <Col>
          <Button
            disabled={fillingReport?.GSTR1?.isFilled}
            onClick={handleOtp}
            className="fs-4 px-5 py-2"
          >
            {!fillingReport?.GSTR1?.isFilled ? "Fill Statement" : "Filled"}
          </Button>
        </Col>
      </Row>

      <VerifyModal
        show={verify}
        handleClose={() => setVerify(false)}
        submitFunction={handleFillStatement}
        otpId={otpId}
      />
    </>
  );
}
