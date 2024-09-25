import { useState } from "react";

import "./App.css";

import Layout from "./components/layout/Layout";
import LogOrSign from "./components/logOrSign/LogOrSign";
import UserContainer from "./components/userContainer/UserContainer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);

  return (
    <div className="flex flex-column container">
      <Layout loggedUser={loggedUser}>
        {isLoggedIn ? (
          <UserContainer isLoggedIn={isLoggedIn} />
        ) : (
          <LogOrSign
            setIsLoggedIn={setIsLoggedIn}
            setLoggedUser={setLoggedUser}
          />
        )}
      </Layout>
    </div>
  );
}

export default App;
