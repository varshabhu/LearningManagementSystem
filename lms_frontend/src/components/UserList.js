import React from "react";
import DeleteUserButton from "./DeleteUserButton";
import "./UserList.css";

const UserList = ({ users, onDelete }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <DeleteUserButton userId={user.id} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
