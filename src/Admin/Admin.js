import React from "react";

import "./Admin.css";
import AdminControls from "./AdminControls/AdminControls";
import Login from "./Login/Login";

const Admin = () => {
  const user = "dunes";
  return <div className="admin">{user ? <AdminControls /> : <Login />}</div>;
};

export default Admin;
