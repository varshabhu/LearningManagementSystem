import React, { useState } from "react";
import { BiSearch } from 'react-icons/bi';
import EditUserForm from "./EdituserForm";
import "./ManageUser.css";
import AddUserForm from "./AddUserForm";

const ManageUser = () => {
  const user = [
    // Your user data here...   { id: 1, name: "Bhuvaneshwari", email: "123@example.com", role: "student" },
    { id: 2, name: "Abisree", email: "387547@example.com", role: "student" },
    { id: 3, name: "Savitha", email: "983948@example.com", role: "student" },
    { id: 4, name: "Deepika", email: "342@example.com", role: "student" },
    { id: 5, name: "Sumalini", email: "39084mfn@example.com", role: "student" },
    { id: 6, name: "Keerthana", email: "9nhfdsb@example.com", role: "student" },
    { id: 7, name: "Shannu", email: "93nhfsdln@example.com", role: "student" },
    { id: 8, name: "Anusree", email: "394fnd@example.com", role: "student" },
    { id: 9, name: "Dhakshniya", email: "384fcnv@example.com", role: "student" },
    { id: 10, name: "Harini", email: "j3439rfkl@example.com", role: "student" },
    { id: 11, name: "Kaviya", email: "384fcnv@example.com", role: "student" },
    { id: 12, name: "akshaya", email: "j3439rfkl@example.com", role: "student" },
    

  ];

  const [users, setUsers] = useState(user);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // No need to handle search submit logic here as we update the filteredCourses state
  };

  // Filter the users based on the search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    // Clear editing state if the user being edited is deleted
    if (editingUserId === id) {
      setEditingUserId(null);
    }
  };

  const handleEditUser = (id, updatedUser) => {
    const updatedUsers = users.map((user) => (user.id === id ? updatedUser : user));
    setUsers(updatedUsers);
    setEditingUserId(null);
  };

  const handleStartEditing = (id) => {
    setEditingUserId(id);
  };

  return (
    <div>
      <div>
      <nav className="navbar">
        <div className="it">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270779/beirio-removebg-preview_um4vby.png" width="40px" height="40px"/>
        </div>
        <div className="navbar-brand">Explore</div>
      
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit"><BiSearch/></button>
          <div className="cse">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270147/profile-removebg-preview_zt8pt4.png" width="40px" height="40px"/>
          </div>
        </form>
        </nav>
      </div>
      <div className="user-management-container">
        <center><h2>User Management</h2></center>
        <div className="adding">
          <AddUserForm onAdd={handleAddUser} />
        </div>
        <div className="user">
          <table>
            <thead>
              <tr>
                <th className="gapping1">Name</th>
                <th className="gapping2">Email</th>
                <th className="gapping3">Role</th>
                <th className="gapping4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) =>
                editingUserId === user.id ? (
                  <EditUserForm
                    key={user.id}
                    user={user}
                    onCancel={() => setEditingUserId(null)}
                    onSave={(updatedUser) => handleEditUser(user.id, updatedUser)}
                  />
                ) : (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button onClick={() => handleStartEditing(user.id)}>Edit</button>
                      <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
