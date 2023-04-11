import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as ROUTES from "../../constants/routes";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="settingsidebar">
      <Button
        disabled
        style={{
          fontSize: "20px",
          backgroundColor: "black",
          color: "white",
          padding: "10px 10px 10px 15px",
        }}
      >
        SETTINGS
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ marginLeft: "80px" }}
        ></i>
      </Button>
      <Button
        variant="primary"
        className="p-3"
        style={{ marginLeft: "15px" }}
        onClick={() => navigate("/")}
      >
        {" "}
        <i className="fa-solid fa-arrow-left editbox--back"></i>Back To
        Dashboard
      </Button>
      <hr />
      <Link to={ROUTES.ACCOUNT}>
        <i className="fa-solid fa-users"></i>Account
      </Link>
      <Link to={ROUTES.BUISNESSMANAGE}>
        <i className="fa-solid fa-list-check"></i>Manage Business
      </Link>
      <Link to={ROUTES.THEME}>
        <i className="fa-solid fa-file-invoice"></i>Invoice Themes
      </Link>
      <Link to={ROUTES.USERMANAGE}>
        <i className="fa-solid fa-circle-user"></i>Manage Users
      </Link>
      <Link to={ROUTES.REMINDER}>
        <i className="fa-solid fa-clock"></i>Reminder
      </Link>
      <hr />
      <Link to="">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>Logout
      </Link>
      {/* <Link href="/setting/partiii">PARTY</Link>
            <Link href="/setting/item">ITEM</Link> */}
    </div>
  );
}
