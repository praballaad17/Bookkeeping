import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemSearchBox from "../ItemSearchBox";
import { useUser } from "../../../Context/userContext";
import { getPartyByUserId } from "../../../services/partyServices";
import DeleteModal from "./DeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faTimes } from "@fortawesome/free-solid-svg-icons";
import TableItem from "../TableItem";
import { useInvoice } from "../../../Context/invoiceContext";

export default function ItemList({ isEdit, setitemlist }) {
  const navigate = useNavigate();
  const { user } = useUser();
  const { invoice, itemlist, editInvoice, AddEmptyItem } = useInvoice();

  const [decimal, setDecimal] = useState(0);

  const [customers, setCustumers] = useState([]);

  useEffect(() => {
    const getCustumers = async () => {
      try {
        const customers = await getPartyByUserId(user?.id, "custumer");
        setCustumers(customers);
      } catch (error) {
        console.log(error);
      }
    };
    getCustumers();
  }, []);

  const handleRoundOff = (e) => {
    if (e.target.checked) {
      const rounded = Math.round(invoice.total);
      setDecimal(rounded - invoice.total);
      handleTotalAmount(rounded);
    }
    if (!e.target.checked) {
      handleTotalAmount(invoice.total + decimal);
      setDecimal(0);
    }
  };

  return (
    <div>
      <div className="scrolable">
        <div className="topnavbar">
          <div>
            <span className="fs-3">SALES | </span>
            <span className="creditspan">Credit </span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="cashspan"> Cash</span>
          </div>
          <div>
            <FontAwesomeIcon className="fs-3 mx-3" icon={faCalculator} />
            <FontAwesomeIcon
              className="fs-3 mx-3"
              onClick={() => navigate("/sales")}
              icon={faTimes}
            />
          </div>
        </div>
        <div className="above">
          <div className="abovetable">
            <div className="partyinput ">
              <select
                readOnly={!isEdit}
                value={invoice?.partyId ? invoice.partyId : "party"}
                onChange={(e) => {
                  editInvoice(e);
                }}
                id="types"
                name="partyId"
                className="partyinputs"
              >
                <option value="party">Customer *</option>
                {customers &&
                  customers.length &&
                  customers.map((customer) => (
                    <option key={customer?._id} value={customer?._id}>
                      {customer?.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="quantity">Invoice Number : </label>
              <input
                readOnly={!isEdit}
                value={invoice?.invoiceNumber}
                onChange={(e) => editInvoice(e)}
                type="text"
                id="invoiceNumber"
                name="invoiceNumber"
              />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone No."
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
                readOnly={!isEdit}
              />
            </div>

            <div>
              <label htmlFor="billdate" className="inputbox">
                {" "}
                Invoice Date :{" "}
              </label>
              <input
                readOnly={!isEdit}
                defaultValue={invoice?.date}
                type="date"
                id="billdate"
                name="date"
                onChange={(e) => editInvoice(e)}
              />
            </div>
          </div>
        </div>
        <table className="item__table">
          <thead>
            <tr className="item-heading">
              <th className="title-item--index">#</th>
              <th className="title-item title">Item</th>
              <th className="title">Item Code</th>
              <th className="title">Quantity</th>
              <th className="title">Unit</th>
              <th className="title-ppu title">
                <div>Price</div>
                <select className="title-ppu--select">
                  <option>Without Tax</option>
                  <option>With Tax</option>
                </select>
              </th>
              <th colspan="2" className="title title--tax">
                <div className="title--tax__top">Tax</div>
                <div className="title--tax__foot">
                  <div className="title--tax__foot--left">%</div>
                  <div className="title--tax__foot--right">Amount</div>
                </div>
              </th>
              <th className="title">Amount</th>
            </tr>
          </thead>

          <tbody>
            {itemlist.map((item, i) => (
              <TableItem
                key={i}
                item={item}
                isEdit={isEdit}
                i={i}
                type={invoice.type}
              />
            ))}
          </tbody>
        </table>
        <div className="itemAdd-btn">
          {
            <button
              disabled={!isEdit}
              className={`btn  ${!isEdit ? "btn--disable" : "btn--secondary"}`}
              onClick={AddEmptyItem}
            >
              Add Item
            </button>
          }
        </div>
        <div className="belowtable">
          <div className="paymentinputleft "></div>
          <div className="paymentinputright">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="checkboxinput"
              onChange={(e) => handleRoundOff(e)}
            />
            <label htmlFor="roundoff" className="roundofflabel">
              Round-off :
            </label>
            <input
              type="text"
              id="roundoff"
              name="roundoff"
              className="roundoff"
              value={decimal}
              disabled
            />
            <label htmlFor="total">Total : </label>
            <input
              readOnly
              type="number"
              id="total"
              name="total"
              value={invoice?.total}
              className="totalinput"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
