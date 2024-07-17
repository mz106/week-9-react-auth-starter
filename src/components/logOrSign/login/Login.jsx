import { useState } from "react";

import "./Login.css";

const Login = ({ handleChange, handleSubmit, logOrSignSetters }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const testLogin = (username, password) => {
    console.log("test is working");
    console.log(username, password);
    return {
      message: "success",
      user: {
        id: 1,
        username: "michael",
      },
    };
  };

  return (
    <div className="flex flex-column login">
      <form
        onSubmit={(e) =>
          handleSubmit(e, testLogin, logOrSignSetters, username, password)
        }
        className="flex flex-column login-form"
      >
        <h3>Login</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username..."
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password..."
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
