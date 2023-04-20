import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import { INVOICETYPE } from "../../../constants/variables";
import { useUser } from "../../../Context/userContext";
import useSearch from "../../../hooks/useSearch";
import {
  getInvoiceUserId,
  deleteInvoice,
  createAndDownloadPdf,
  getInvoiceInvoiceId,
  searchInvoice,
} from "../../../services/InvoiceServices";
import DeleteModal from "./DeleteModal";
import { useData } from "../../../Context/dataContext";
import Button from "react-bootstrap/esm/Button";

export default function SalesInvoice() {
  const { user } = useUser();
  const { getSalesInvoice, salesInvoice } = useData();
  const [loading, setLoading] = useState(false);
  const [deleteModal, setDelete] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  // const { resut } = useSearch();

  useEffect(() => {
    setLoading(true);

    getSalesInvoice();
    setLoading(false);
    setRefresh(false);
  }, [user, refresh]);

  const openInvoice = (invoice) => {
    navigate(`/invoice/sales/open/${invoice._id}`, { state: { invoice } });
  };

  const handleDownloadPdf = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const invoice = await getInvoiceInvoiceId(id);
    createAndDownloadPdf(invoice);
  };

  const HandleDeleteInvoice = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDelete(true);
  };

  const handleSearch = async (e) => {
    console.log(e.target.value);
    try {
      const res = await searchInvoice(e.target.value);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(salesInvoice);

  return (
    <>
      <div className="purinvoice__head">
        <div className="leftheadpurchase">
          <span>Sales Invoices</span>
          <span className="smallfontpurchase">
            Bill your Sales to Customers
          </span>
        </div>
        <div className="rightheadpurchase">
          <i className="fa-solid fa-keyboard"></i>
          <Button className="p-2 fs-4" variant="outline-info">
            Invoice Settings <i className="fa-solid fa-gear "></i>
          </Button>
          <Button className="p-2 fs-4 mx-3" variant="outline-info">
            {" "}
            + POS Billing
          </Button>
          <Link to={ROUTES.ADDSALESINV}>
            <Button className="p-2 fs-4" variant="outline-info">
              + Create Sales Invoice
            </Button>
          </Link>
        </div>
      </div>
      <div className="purinvoice__body">
        <div className="purinvoicebody">
          <div className="purchaseinvoicebodyleft">
            <div className="searchbox">
              <i
                style={{ paddingLeft: "5px" }}
                className="fa-solid fa-magnifying-glass searchicon"
              ></i>
              <input
                type="search"
                className="searchbar searchbarpurchase"
                id="searchitem"
                name="searchitem"
                spellCheck="false"
                data-ms-editor="true"
                placeholder="Search Sales Invoices"
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <div>
              <select id="types" name="timespan" className="timespanpurchase">
                <option value="currentyear">Current Fiscal Year</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="thisweek">This Week</option>
                <option value="thismonth">This Month</option>
                <option value="thisquarter">This Quarter</option>
                <option value="custom">Custom</option>
                <option value="7days">Last 7 days</option>
                <option value="previousyear">Previous Fiscal Year</option>
                <option value="alltime">All Time</option>
              </select>
            </div>
          </div>
          <div className="purchaseinvoicebodyright">
            <div>
              <select id="types" name="timespan" className="reportpurchase">
                <option value="" disabled selected hidden>
                  {" "}
                  Reports{" "}
                </option>
                <option value="salessummary">Sales Summary</option>
                <option value="gstr1">GSTR-1 (Sales)</option>
                <option value="daybook">DayBook</option>
                <option value="billwiseprofit">Bill Wise Profit</option>
              </select>
            </div>
          </div>
        </div>
        <table className="purinvoice__table item__table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Invoice Number</th>
              <th>Party Name</th>
              <th>Catagories Name</th>
              <th>Total</th>
              <th>Balance</th>
              <th>Print</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              salesInvoice.map((invoice) => (
                <tr
                  key={invoice._id}
                  className="purinvoice__table--invoice"
                  onClick={() => openInvoice(invoice)}
                >
                  <td>
                    <div onClick={HandleDeleteInvoice}>
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                  </td>
                  <td>{invoice?.date}</td>
                  <td className="text-center">{invoice?.invoiceNumber}</td>
                  <td className="text-center">{invoice?.party?.name}</td>
                  <td className="text-center">{invoice?.party?.gstType}</td>
                  <td className="text-right">{invoice?.total}</td>
                  <td className="text-right">
                    {invoice?.party?.balance ? invoice.party.balance : 0}
                  </td>
                  <td onClick={(e) => handleDownloadPdf(e, invoice._id)}>
                    <i className="fa-solid fa-print"></i>
                  </td>
                  <DeleteModal
                    deleted={(e) => {
                      e.stopPropagation();
                      deleteInvoice(invoice._id);
                      setDelete(false);
                      setRefresh(true);
                    }}
                    open={deleteModal}
                    onClose={(e) => {
                      e.stopPropagation();
                      setDelete(false);
                    }}
                  />
                </tr>
              ))
            ) : (
              <tr>
                <td colspan="8">
                  <div className="u-flex-all-center"> Loading...</div>
                </td>
              </tr>
            )}

            {!salesInvoice ||
              (!salesInvoice.length && !loading && (
                <tr className="purchasebodyspan">
                  <td colspan="8" className="text-center">
                    No Sales Invoice made during the selected time period
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
