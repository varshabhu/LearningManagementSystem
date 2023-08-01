import React, { useState, useEffect } from "react";
import "./EditUserForm.css";

const EditUserForm = ({ user, onCancel, onSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role,setRole]=useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const updatedUser = { ...user, name, email ,role};
    onSave(updatedUser);
  };

  return (
    <div className="edit-user-form">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <input
          type="role"
          placeholder="ROle"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
