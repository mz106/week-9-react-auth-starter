import React from "react";

import "./Signup.css";

const Signup = () => {
  return (
    <div className="flex flex-column signup">
      <form className="flex flex-column signup-form">
        <h3>Signup</h3>
        <div>
          <input type="text" placeholder="Username..." />
          <input type="email" placeholder="Email..." />
          <input type="text" placeholder="Password..." />
        </div>
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
