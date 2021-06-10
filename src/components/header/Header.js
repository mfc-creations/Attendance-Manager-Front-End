import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2>Attendance Manager</h2>
      <Link to="admin-login">
        <button>Admin</button>
      </Link>
    </div>
  );
};

export default Header;
