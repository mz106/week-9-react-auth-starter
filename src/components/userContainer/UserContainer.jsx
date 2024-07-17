import { useEffect, useState } from "react";

import UserCard from "./userCard/UserCard";

import "./UserContainer.css";

const UserContainer = ({ isLoggedIn }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await testUseEffect();
      console.log(data);
      await setUsers(data.users);
    }

    fetchUsers();
  }, [isLoggedIn]);

  const testUseEffect = () => {
    console.log("useEffect in usercontainer is working");
    return {
      users: [
        { id: 1, username: "dave" },
        { id: 2, username: "jane" },
        { id: 3, username: "sarah" },
        { id: 1, username: "dave" },
        { id: 2, username: "jane" },
        { id: 3, username: "sarah" },
        { id: 1, username: "dave" },
        { id: 2, username: "jane" },
        { id: 3, username: "sarah" },
        { id: 1, username: "dave" },
        { id: 2, username: "jane" },
        { id: 3, username: "sarah" },
        { id: 1, username: "dave" },
        { id: 2, username: "jane" },
        { id: 3, username: "sarah" },
      ],
    };
  };

  return (
    <div className="flex flex-column container">
      <div className="flex flex-row inner-container user-inner-container">
        {users.length >= 1 ? (
          users.map((user) => <UserCard user={user} />)
        ) : (
          <p>No users</p>
        )}
      </div>
    </div>
  );
};

export default UserContainer;
