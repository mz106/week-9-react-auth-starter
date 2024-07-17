import React from "react";

const Header = ({ loggedUser }) => {
  return (
    <div>
      {!loggedUser ? (
        <p>Please login</p>
      ) : (
        <p>Hello {loggedUser.user.username}</p>
      )}
    </div>
  );
};

export default Header;
