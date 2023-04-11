import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as ROUTES from "../../constants/routes";
import { SidebarData } from "./SidebarData";
import "../../css/Sidebar.css";
import SubMenu from "./SubMenu";
import { NAVITEM } from "../../constants/variables";

import Button from "react-bootstrap/Button";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  /*left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};*/
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export default function Sidebar({ open, onClose }) {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  let location = useLocation();
  const pathname = location.pathname.slice(1);
  console.log(pathname);

  return (
    <>
      <div className="sidebar">
        <div className="mainbuttondiv">
          <Button
            variant="primary"
            type="button"
            className="p-3 mx-auto fs-4"
            onClick={onClose}
          >
            My Company <i className="fa-solid fa-angle-right"></i>
          </Button>
        </div>

        <Link
          className={`${pathname == NAVITEM.HOME ? "active" : ""}`}
          to={ROUTES.DASHBOARD}
        >
          <i className="fa-solid fa-house"></i> Home
        </Link>
        <Link
          className={`${pathname == NAVITEM.PARTY ? "active" : ""}`}
          to={ROUTES.PARTIESINV}
        >
          <i className="fa-solid fa-user-group"></i>Parties
        </Link>
        <Link
          className={`${pathname == NAVITEM.ITEM ? "active" : ""}`}
          to={ROUTES.ITEM}
        >
          <i className="fa-solid fa-box-archive"></i>Item
        </Link>
        <Link
          className={`${pathname == NAVITEM.SALES ? "active" : ""}`}
          to={ROUTES.SALESINV}
        >
          <i className="fa-solid fa-bag-shopping"></i>Sales
        </Link>
        <Link
          className={`${pathname == NAVITEM.PURCHASE ? "active" : ""}`}
          to={ROUTES.PURCHASEINV}
        >
          <i className="fa-solid fa-cart-plus"></i>Purchases
        </Link>
        <Link
          className={`${pathname == NAVITEM.GSTDASH ? "active" : ""}`}
          to={ROUTES.GSTDASH}
        >
          <i className="fa-solid fa-cart-plus"></i>GST Dashboard
        </Link>
        <Link
          className={`${pathname == NAVITEM.EXPENSES ? "active" : ""}`}
          to={ROUTES.EXPENSES}
        >
          <i className="fa-solid fa-wallet"></i>Expenses
        </Link>
        <Link
          className={`${pathname == NAVITEM.CASHBANK ? "active" : ""}`}
          to={ROUTES.EXPENSES}
        >
          <i className="fa-light fa-wallet"></i>Cash and Bank
        </Link>
        <Link
          className={`${pathname == NAVITEM.EXPENSES ? "active" : ""}`}
          to={ROUTES.EXPENSES}
        >
          <i className="fa-solid fa-store"></i>My Online Store
        </Link>
        <a href="#Reports ">
          <i className="fa-light fa-signal"></i>Reports
        </a>
        <hr />
        <Link
          className={`${pathname == NAVITEM.IMPORTITEM ? "active" : ""}`}
          to={ROUTES.IMPORTITEM}
        >
          <i className="fa-solid fa-gear"></i>Import items
        </Link>
        <Link
          className={`${pathname == NAVITEM.SETTING ? "active" : ""}`}
          to={ROUTES.SETTING}
        >
          <i className="fa-solid fa-gear"></i>Settings
        </Link>
        <hr />

        <a href="#Feedback">
          <i className="fa-solid fa-star"></i>Share Feedback
        </a>
      </div>
    </>
  );
}
