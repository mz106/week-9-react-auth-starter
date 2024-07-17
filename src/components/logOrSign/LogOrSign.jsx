import React from "react";

import Login from "./login/Login";
import Signup from "./signup/Signup";

import "../../general.css";
import "./LogOrSign.css";

const LogOrSign = () => {
  return (
    <div className="flex flex-column container red-border">
      <div className="flex flex-row inner-container logOrSign-container red-border">
        <Login />
        <Signup />
      </div>
    </div>
  );
};

export default LogOrSign;
