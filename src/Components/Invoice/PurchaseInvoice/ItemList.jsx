import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../Context/userContext";
import { getPartyByUserId } from "../../../services/partyServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { useInvoice } from "../../../Context/invoiceContext";
import TableItem from "../TableItem";

export default function ItemList({ isEdit }) {
  const navigate = useNavigate();
  const { user } = useUser();
  const { invoice, itemlist, editInvoice, AddEmptyItem } = useInvoice();
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    const getSupplier = async () => {
      try {
        const supplier = await getPartyByUserId(user?.id, "supplier");
        setSupplier(supplier);
      } catch (error) {
        console.log(error);
      }
    };
    getSupplier();
  }, []);

  return (
    <div>
      <div className="scrolable">
        <div className="topnavbar">
          <span className="fs-3">PURCHASE</span>
          <div>
            <FontAwesomeIcon className="fs-2 mx-3" icon={faCalculator} />
            <FontAwesomeIcon
              className="fs-2 mx-3"
              icon={faTimes}
              onClick={() => navigate("/purchase")}
            />
          </div>
        </div>
        <div className="above">
          <div className="abovetable">
            <div className="partyinput ">
              <select
                onChange={(e) => {
                  editInvoice(e);
                }}
                id="partyId"
                name="partyId"
                className="partyinputs"
              >
                <option value="party">Supplier *</option>
                {supplier &&
                  supplier.length &&
                  supplier.map((supplier) => (
                    <option key={supplier?._id} value={supplier?._id}>
                      {supplier?.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="quantity">Bill Number : </label>
              <input
                readOnly={!isEdit}
                value={invoice?.invoiceNumber}
                onChange={(e) => editInvoice(e)}
                type="tel"
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
                defaultValue={invoice?.date.substring(0, 10)}
                type="date"
                id="date"
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
          <Button
            disabled={!isEdit}
            className={`btn  ${!isEdit ? "btn--disable" : "btn--secondary"}`}
            onClick={AddEmptyItem}
          >
            Add Item
          </Button>
        </div>
        <div className="belowtable">
          <div className="paymentinputleft ">
            <label htmlFor="payment">Payment Mode : </label>
            <select id="types" name="payment" className="paymentmode">
              <option value="Cash">Cash</option>
              <option value="Retail">One</option>
              <option value="WholeSale">Two</option>
            </select>
          </div>
          <div className="paymentinputright">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="checkboxinput"
            />
            <label htmlFor="roundoff" className="roundofflabel">
              Round-off :{" "}
            </label>
            <input
              type="text"
              id="roundoff"
              name="roundoff"
              className="roundoff"
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
