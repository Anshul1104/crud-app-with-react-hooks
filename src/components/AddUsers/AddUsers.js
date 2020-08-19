import React, { useState } from "react";

const AddUsers = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
  	const { name, value } = event.target
  	setUser({ ...user, [name]: value })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!user.name || !user.username) return;
    props.onAddUser(user);
    setUser(initialFormState);
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label name="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label name="name">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add New User
        </button>
      </form>
    </div>
  );
};

export default AddUsers;
