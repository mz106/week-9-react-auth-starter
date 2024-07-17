import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div className="flex flex-column login">
      <form className="flex flex-column login-form">
        <h3>Login</h3>
        <div>
          <input type="text" placeholder="Username..." />
          <input type="text" placeholder="Password..." />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
