import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "../css/homeStyle.css";
const Home = ({ handleOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="inner-div">
        <div className="home-first">
          <h3 className="home-subheading">Add your first Invoice</h3>
          <Button
            variant="danger"
            className="p-3 w-75 fs-4"
            onClick={() => navigate("/sales/add")}
          >
            Add Invoices
          </Button>
        </div>
        <div className="home-sec">
          <h3 className="home-subheading">Add your Company Details</h3>
          <Button
            variant="danger"
            className="p-3 w-75 fs-4"
            onClick={handleOpen}
          >
            My Company
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
