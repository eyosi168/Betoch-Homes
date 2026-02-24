import React, { useContext } from "react";
import "./layout.scss";
import Navbar from "../../navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { Authcontext } from "../../../context/AuthContext";

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
function RequireAuth() {
  const {currentUser}=useContext(Authcontext);
  return (
     !currentUser? ( <Navigate to="/login"/>):( <div>
      <div className="layout">
        <div className="navbar">
         
          <Navbar></Navbar>
        </div>
        <div className="content">
          
          <Outlet/>
        </div>
      </div>
    </div>)
   
  );
}

export {Layout,RequireAuth};
