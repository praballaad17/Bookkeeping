import React from "react";
import { GSTTABLE } from "../../constants/variables";
import { useGST } from "../../Context/gstContext";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
const TOPERHALFRATE = 200;
const TOPER = 100;
export default function Gstr1Tabs({}) {
  const { gstr1Invoice, b2bInvoice, b2cInvoice } = useGST();
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
                <th key={item} className="text-center">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gstr1Invoice.length ? (
              gstr1Invoice.map((invoice, index) => (
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
      </Tab>
      <Tab eventKey="B2B" title="B2B">
        <Table striped bordered hover>
          <thead>
            <tr>
              {GSTTABLE.map((item, i) => (
                <th key={i} className="text-center">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b2bInvoice.map((invoice, index) => (
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
              {GSTTABLE.map((item, i) => (
                <th key={i} className="text-center">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b2cInvoice.map((invoice, index) => (
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
                <td className="text-right">₹0</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
}
