import React from "react";
import "./layout.scss";
import Navbar from "../../navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="layout">
        <div className="navbar">
          {/* responsive too */}
          <Navbar></Navbar>
        </div>
        <div className="content">
           {/* to the parent layout */}
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
