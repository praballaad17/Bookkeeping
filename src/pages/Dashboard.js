import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import DetailsModal from "../Components/DetailsModal";
import Sidebar from "../Components/Sidebar";
import Uppernavbar from "../Components/Uppernavbar";
import * as ROUTES from "../constants/routes";
import "../css/dashboardStyle.css";
export default function Dashboard({ user: loggedInUser }) {
  const [open, setOpen] = useState(false);

  // if (!loggedInUser) return <Navigate to={ROUTES.LOGIN} />

  return (
    <div className="dashboard-mian">
      <div id="top-div">
        <Uppernavbar />
      </div>
      <div id="bottom-div">
        <div id="sidebar-div">
          <Sidebar
            open={open}
            onClose={() => {
              setOpen(true);
            }}
          />
        </div>

        <DetailsModal open={open} onClose={() => setOpen(false)} />
              <div id="central-div">
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                  </Routes>
        </div>
      </div>
    </div>
  );
}
