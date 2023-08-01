import React, { useState } from "react";
import "./AddUserForm.css";

const AddUserForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const newUser = {
      id: new Date().getTime(),
      name: name,
      email: email,
      role:role,
    };

    onAdd(newUser);
    setName("");
    setEmail("");
    setRole("");
  };

  return (
    <div className="add-user-form">
      <h2>Add User</h2>
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
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
