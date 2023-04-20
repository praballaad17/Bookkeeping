import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../css/DetailModal.css";
import { EMPTYBUISNESS, STATES } from "../constants/variables";
import { updateBusinessDetails } from "../services/authenticationServices";
import { useUser } from "../Context/userContext";

export default function DetailsModal({ open, onClose }) {
  const [business, setBuisness] = useState(EMPTYBUISNESS);
  const [edit, setEdit] = useState(false);
  const { addToast, user, userDetails, setLoading } = useUser();

  useEffect(() => {
    if (userDetails.profileId) {
      setBuisness(userDetails.profileId);
    }
  }, [userDetails]);

  const handleSubmit = async () => {
    setEdit(false);
    setLoading(faArrowTrendUp);
    try {
      const res = await updateBusinessDetails(user.id, business);
      onClose();
      setLoading(false);
      addToast("Updated Profile Details");
    } catch (error) {
      addToast("Error: Cannot Update Buisness Details", true);
      console.log(error);
      setLoading(false);
    }
  };

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="modal-layout heeeeeee" onClick={onClose}></div>
      <div className="detailsmodalallclassestestbox fs-3">
        <div className="checcc">
          <div className="div-cross cross">
            <FontAwesomeIcon icon={faTimes} onClick={onClose} />
          </div>
          <div className="columsss">
            <div className="itemjjj">
              <label htmlFor="bname">Business Name</label>
              <input
                onChange={(e) =>
                  setBuisness({ ...business, businessName: e.target.value })
                }
                id="bname"
                type="text"
                name="bname"
                value={business.businessName}
                readOnly={!edit}
              />
            </div>
            <div className="itemjjj">
              <label htmlFor="email"> Email Address</label>
              <input
                onChange={(e) =>
                  setBuisness({ ...business, email: e.target.value })
                }
                id="email"
                value={business.email}
                type="email"
                name="lname"
                readOnly={!edit}
              />
            </div>
            <div className="itemjjj">
              <label htmlFor="tel">Contact-No:</label>
              <input
                onChange={(e) =>
                  setBuisness({ ...business, phoneNo: e.target.value })
                }
                id="tel"
                value={business.phoneNo}
                type="tel"
                name="address1"
                readOnly={!edit}
              />
            </div>
            <div className="itemjjj">
              <label htmlFor="state">State</label>
              <select
                onChange={(e) =>
                  setBuisness({ ...business, state: e.target.value })
                }
                id="state"
                value={business.state}
                type="text"
                name="state"
                disabled={!edit}
              >
                <option>select</option>
                {STATES.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.data}
                  </option>
                ))}
              </select>
            </div>
            <div className="itemjjj">
              <label htmlFor="zip">Zip/Postal Code</label>
              <input
                onChange={(e) =>
                  setBuisness({ ...business, pincode: e.target.value })
                }
                id="zip"
                type="text"
                value={business.pincode}
                name="zip"
                readOnly={!edit}
              />
            </div>
            <div className="itemjjj">
              <label htmlFor="gstin">GST IN</label>
              <input
                onChange={(e) =>
                  setBuisness({ ...business, gstin: e.target.value })
                }
                id="gstin"
                value={business.gstin}
                type="text"
                name="gstin"
                readOnly={!edit}
              />
            </div>
            <div className="itemjjj">
              <label htmlFor="businesstype">Business Type</label>
              <select
                onChange={(e) =>
                  setBuisness({ ...business, businessType: e.target.value })
                }
                value={business.businessType}
                id="types"
                className="detailmodalselect"
                name="business"
                disabled={!edit}
              >
                <option value="none">None</option>
                <option value="Retail">Retail</option>
                <option value="WholeSale">WholeSale</option>
                <option value="Distributor">Distributor</option>
                <option value="Service">Service</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="itemjjj">
              <label htmlFor="businessCategory">GST Type</label>
              <select
                onChange={(e) =>
                  setBuisness({ ...business, gstType: e.target.value })
                }
                disabled={!edit}
                value={business.gstType}
                id="types"
                className="detailmodalselect"
                name="business"
              >
                <option value="none">Select</option>
                <option value="registered">Registered</option>
                <option value="Unregistered">Unregistered</option>
              </select>
            </div>
            <div className="itemjjj">
              <label htmlFor="phone">Business Discription</label>
              <textarea
                onChange={(e) =>
                  setBuisness({ ...business, description: e.target.value })
                }
                value={business.description}
                rows="4"
                cols="24"
                name="comment"
                placeholder="Discription.."
                className="textareabusiness"
                readOnly={!edit}
              ></textarea>
            </div>
            <div className="itemjjj">
              <label htmlFor="phone">Business Address</label>
              <textarea
                onChange={(e) =>
                  setBuisness({ ...business, address: e.target.value })
                }
                value={business.address}
                rows="4"
                cols="24"
                name="comment"
                form="usrform"
                placeholder="Address.."
                className="textareabusiness"
                readOnly={!edit}
              ></textarea>
            </div>
          </div>
          <div className="btn-block">
            <button
              onClick={() => setEdit(!edit)}
              className="buttondetailmodal me-5"
            >
              {!edit ? "Edit" : "Cancel"}
            </button>
            <button onClick={handleSubmit} className="buttondetailmodal">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
