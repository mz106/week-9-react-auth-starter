import { useEffect, useState } from "react";

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
      ],
    };
  };

  return (
    <div className="flex flex-column container red-border">
      <div className="flex flex-row inner-container user-container red-border">
        {users.length >= 1 ? (
          users.map((user) => <p key={user.id}>{user.username}</p>)
        ) : (
          <p>No users</p>
        )}
      </div>
    </div>
  );
};

export default UserContainer;
