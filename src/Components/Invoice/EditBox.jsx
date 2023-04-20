import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteInvoice } from "../../services/InvoiceServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/esm/Button";
import { useUser } from "../../Context/userContext";

export default function EditBox({ id, name, title, setEdit }) {
  const navigate = useNavigate();
  const { setLoading } = useUser();
  const HandleDelete = () => {
    setLoading(true);
    deleteInvoice(id)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error: Invoice not deleted");
        setLoading(false);
      })
      .finally(() => {
        window.location = "/sales/";
      });
  };
  return (
    <div className="editbox">
      <div className="editbox__left">
        <FontAwesomeIcon onClick={() => navigate(-1)} icon={faArrowLeft} />
        <div className="editbox--title">
          {title}
          {name}
        </div>
      </div>
      <div className="editbox__right">
        <Button
          variant="outline-info"
          className="fs-3 px-4"
          onClick={() => setEdit(true)}
        >
          Edit
        </Button>
        <Button
          variant="outline-info"
          className="fs-3 px-4"
          onClick={HandleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
