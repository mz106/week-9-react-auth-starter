import Login from "./login/Login";
import Signup from "./signup/Signup";

import "../../general.css";
import "./LogOrSign.css";

// eslint-disable-next-line react/prop-types
const LogOrSign = ({ setIsLoggedIn, setLoggedUser }) => {
  return (
    <div className="flex flex-column container">
      <div className="flex flex-row inner-container logOrSign-container">
        <Login setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn} />
        <Signup setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};

export default LogOrSign;
