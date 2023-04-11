import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useUser } from "../../Context/userContext";
import { getPartyByUserId } from "../../services/partyServices";

export default function Parties() {
  const { user } = useUser();
  const [invoice, setInvoice] = useState();
  const [open, setOpen] = useState(false)
  const [parties, setParties] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const getParties = async () => {
      const parties = await getPartyByUserId(user?.id, "all")
      setParties(parties)
    };
    getParties();
  }, [user]);



  const openParty = (party) => {
    navigate(`/party/open/${party._id}`, { state: { party } });
  }

  return (
    <>
      <div className="purinvoice__head">
        <div className="leftheadpurchase">
          <span className="partieslefthead">Parties</span>
        </div>
        <div className="rightheadpurchase">
          <i class="fa-solid fa-keyboard"></i>
          <button className="invoicesettingbutton">
            Party Settings <i class="fa-solid fa-gear "></i>
          </button>
          <button className="possalesbutton bulkpartybutton">
            {" "}
            Bulk Import Parties
          </button>
          <Link
            className="btn btn--tertiary addpurchasebutton addpartybutton"
            to={ROUTES.ADDPARTIESINV}
          // onClick={() => setOpen(true)}
          >
            + Create Party
          </Link>
        </div>
      </div>
      <div className="purinvoice__body">
        <div className="purinvoicebody">
          <div className="purchaseinvoicebodyleft">
            <div class="searchbox">
              <i class="fa-solid fa-magnifying-glass searchicon"></i>
              <input
                type="search"
                class="searchbar searchbarpurchase"
                id="searchitem"
                name="searchitem"
                spellcheck="false"
                data-ms-editor="true"
                placeholder="Search Party"
              />
            </div>
            <div>
              <select id="types" name="timespan" class="timespanpurchase">
                <option value="" disabled selected hidden>
                  {" "}
                  Search Category{" "}
                </option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="thisweek">This Week</option>
                <option value="thismonth">This Month</option>
              </select>
            </div>
          </div>
          <div className="purchaseinvoicebodyright">
            <div>
              <select id="types" name="timespan" class="reportpurchase">
                <option value="" disabled selected hidden>
                  {" "}
                  Reports{" "}
                </option>
                <option value="partywise">Partywise Outstanding</option>
                <option value="itemreport">Item Report By Party</option>
              </select>
            </div>
          </div>
        </div>
        <table className="purinvoice__table item__table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>MOBILE NUMBER</th>
              <th>PARTY TYPE</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {parties && parties.length ? parties.map(party => (
              <tr
                key={party._id}
                onClick={() => openParty(party)}
                className="purinvoice__table--invoice">
                <td>{party?.name}</td>
                <td>{party?.category ? party.category : "nil"}</td>
                <td>{party?.phone}</td>
                <td>{party?.partyType ? party.partyType : "nil"}</td>
                <td>₹ {party?.balance ? party.balance : 0}</td>
              </tr>
            )) :
              <>
                No Parties Available
              </>
            }
          </tbody>
        </table>
      </div>


      {/* add party modal */}
      {/* <AddParties open={open} onClose={() => setOpen(false)} /> */}
    </>
  );
}
