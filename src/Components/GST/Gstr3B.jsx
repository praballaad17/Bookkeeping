import React, { useEffect } from "react";
import { useGST } from "../../Context/gstContext";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import { GSTTABLE } from "../../constants/variables";

const TOPERHALFRATE = 200;
export default function Gstr3B() {
  const { getInvoice, allInvoice, b2bInvoice, b2cInvoice } = useGST();

  useEffect(() => {
    getInvoice();
  }, []);

  console.log(allInvoice);
  return (
    <Tabs
      defaultActiveKey="summary"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="summary" title="Summary">
        <Table striped bordered hover>
          <thead>
            <tr>
              {GSTTABLE.map((item) => (
                <th className="text-center">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allInvoice.map((invoice, index) => (
              <tr>
                <td>{index}</td>
                <td className="text-center">
                  {invoice.party.gstin.length ? invoice.party.gstin : "URD"}
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
                <td className="text-right">₹0</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="B2B" title="B2B">
        <Table striped bordered hover>
          <thead>
            <tr>
              {GSTTABLE.map((item) => (
                <th className="text-center">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b2bInvoice.map((invoice, index) => (
              <tr>
                <td>{index}</td>
                <td className="text-center">
                  {invoice.party.gstin.length ? invoice.party.gstin : "URD"}
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
                <td className="text-right">₹0</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="B2C" title="B2C">
        <Table striped bordered hover>
          <thead>
            <tr>
              {GSTTABLE.map((item) => (
                <th className="text-center">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b2cInvoice.map((invoice, index) => (
              <tr>
                <td>{index}</td>
                <td className="text-center">
                  {invoice.party.gstin.length ? invoice.party.gstin : "URD"}
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
                <td className="text-right">₹0</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
}
