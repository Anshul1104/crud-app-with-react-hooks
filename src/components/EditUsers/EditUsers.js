import React, { useEffect, useState } from "react";

const EditUsers = React.memo((props) => {

  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props])

  const handleInputChange = event => {
  	const { name, value } = event.target
  	setUser({ ...user, [name]: value })
  }

const submitHandler = (event) => {
  event.preventDefault();
  props.updateUser(user.id, user)
}

  return (
    <React.Fragment>
      <h2>Edit User</h2>
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
          Update User
        </button>
        <button onClick={() => props.setEditing(false)} className="btn btn-dark ml-2">
				Cancel
			</button>
      </form>
    </React.Fragment>
  );
});

export default EditUsers;
