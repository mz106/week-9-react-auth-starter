import { useState } from "react";

import "./App.css";

import Layout from "./components/layout/Layout";
import LogOrSign from "./components/logOrSign/LogOrSign";
import UserContainer from "./components/userContainer/UserContainer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex flex-column container">
      <Layout>{isLoggedIn ? <UserContainer /> : <LogOrSign />}</Layout>
    </div>
  );
}

export default App;
