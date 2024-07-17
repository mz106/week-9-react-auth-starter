import React from "react";

import Login from "./login/Login";
import Signup from "./signup/Signup";

import "../../general.css";
import "./LogOrSign.css";

const LogOrSign = ({ logOrSignSetters }) => {
  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  // Either - pass this handleeSubmit to both Login and Signup

  // OR

  // Recreate handle submit in Login and Signup and hardcode the fetch requests/setter in
  const handleSubmit = async (e, fn, logOrSignSetters, ...state) => {
    e.preventDefault();

    const data = await fn(...state);

    logOrSignSetters.setIsLoggedIn(true);
    logOrSignSetters.setLoggedUser(data);
  };

  return (
    <div className="flex flex-column container">
      <div className="flex flex-row inner-container logOrSign-container">
        <Login
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          logOrSignSetters={logOrSignSetters}
        />
        <Signup
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          logOrSignSetters={logOrSignSetters}
        />
      </div>
    </div>
  );
};

export default LogOrSign;
