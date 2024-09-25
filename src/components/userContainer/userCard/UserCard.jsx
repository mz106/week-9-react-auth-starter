/* eslint-disable react/prop-types */
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-column user-card-container red-border">
      <div className="flex flex-column user-card-inner-container">
        <p>Username:</p>
        <p>{user.username}</p>
      </div>
    </div>
  );
};

export default UserCard;
